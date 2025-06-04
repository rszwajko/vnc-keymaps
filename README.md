# vnc-keymaps

Libary part extracted from [PR 2486](https://github.com/kubevirt-ui/kubevirt-plugin/pull/2486)

The goal is to convert text copy-pasted to the VNC console to sequence of scancodes matching the language configured on the (remote) virtual machine. 
General steps in this use case:
1. get text from clipboard
2. for each Unicode code point get the keystrokes required to trigger it in the keyboard layout used on the remote machine
3. emulate user typing in the text - send the keystrokes to the server using QEMUExtendedKeyEvent

Mapping code point to keystrokes:

1. use ucs2keysym() method to convert Unicode code to X11 keysym code. Functionality is part of `xorg-server-1.12.2/hw/xquartz/keysym2ucs.c` that was ported to TypeScript.
2. map keysym code to mnemonic name using `keysym_to_name` mapping based on [XKB mappings](https://github.com/xkbcommon/libxkbcommon/blob/master/src/ks_tables.h)
3. check if there is a mapping for that name in the keymap for the chosen keyboard layout. The keymaps are in Qemu format. In Qemu they are used to enforce a keyboard layout (-k switch).
4. resolved mapping consist of the scancode coressponding to physical key and a list of modifieres i.e. shift, altgr, control.

Example:

1. assume single char ":"
2. Unicode code point is 0x03a
3. X11 keysym code is 0x03a (Latin-1 set has 1:1 mapping)
4. resolved mnemonic name is "colon"
5. in the keymap en-us name "colon" has following mapping: ['colon', 0x27, 'shift']
6. based on this mapping we need to:
   1. press shift key
   2. press and release key with scancode 0x27
   3. release shift key

Limitations:
1. state based modifiers (CapsLock, NumLock) are not supported - the Qemu maintains virtual keyboard and its state but it's seems not available on the client side. In particular if the remote keyboard has CapsLock enabled then the mappings with Shift modifier will be reversed.


Helpful links:
1. RFB protocol in Qemu - https://danielhb.github.io/article/2019/05/06/noVNC-QEMU-RFB.html
2. https://github.com/xkbcommon/libxkbcommon/blob/b21a58d0cb00c117a4821ac528b586c6d7222f0b/src/keysym.c#L68
3. https://github.com/xkbcommon/libxkbcommon/blob/b21a58d0cb00c117a4821ac528b586c6d7222f0b/tools/how-to-type.c#L25
4. https://github.com/qemu/qemu/blob/b69801dd6b1eb4d107f7c2f643adf0a4e3ec9124/ui/vnc_keysym.h
5. https://github.com/qemu/qemu/tree/b69801dd6b1eb4d107f7c2f643adf0a4e3ec9124/pc-bios/keymaps
6. https://www.x.org/releases/X11R7.7/src/xserver/xorg-server-1.12.2.tar.gz


# Contributing keymaps

Key maps can be contributed either by using `qemu-keymap` command provided by the Qemu project or by using custom `xkbcli` command build from `xkbcli how-to-type`


## Using qemu-keymap

The main advantage of this path is simplicity - the command can be installed with package manager.
The main disadvantage is broken support for 3rd level keys - most likely due to breaking changes in libxkbcommon that were not inlcuded (as for now) in the Qemu code.

Steps:
1. install `qemu-tools` i.e. for Fedora
    ```bash
    dnf install qemu-tools
    ```
2. use `qemu-keymap` command to extract information from X11 keymaps
    
3. run `port_keymaps` script to adjust the licence and correct the syntax to TypeScript
    
    ```bash
        qemu-keymap -l us | ./port_keymap.sh > src/keymaps/eng-us.ts
    ```
4. correct the formatting
    ```bash
    yarn lint:fix
    ```

## Using how-to-type-all 

The advantage of this path is full support of 3rd level keys. 

1. clone 'libxkbcommon` project - https://github.com/xkbcommon/libxkbcommon
2. checkout tag for version 1.10.0 (tested release)
    ```bash
     git checkout xkbcommon-1.10.0
    ```
3. copy file with our custom command `how-to-type-all.c`
    ```bash
      cp ./vnc-keymaps/tools/how-to-type-all.c ./libxkbcommon/tools
    ```
4. modify `meson.build`
```
diff --git a/meson.build b/meson.build
index c044c099..30f52f6a 100644
--- a/meson.build
+++ b/meson.build
@@ -524,6 +524,14 @@ if build_tools
                install_dir: dir_libexec)
     install_man('tools/xkbcli-how-to-type.1')
     configh_data.set10('HAVE_XKBCLI_HOW_TO_TYPE', true)
+    # Tool: how-to-type-all
+    executable('xkbcli-how-to-type-all',
+               'tools/how-to-type-all.c',
+               'src/utf8-decoding.c',
+               'src/utf8-decoding.h',
+               dependencies: tools_dep,
+               install: true,
+               install_dir: dir_libexec)
 
     # Tool: interactive-evdev
     if cc.has_header('linux/input.h')
```
5. build the library - refer to https://github.com/xkbcommon/libxkbcommon#building
6. run the command and `port_keymaps` script
    ```bash
    ./libxkbcommon/build/xkbcli-how-to-type-all --layout us \
    | ./vnc-keymaps/tools/port_keymap.sh > ./vnc-keymaps/src/keymaps/eng-us.ts
    ```
7. correct the formatting
    ```bash
    yarn lint:fix
    ```

# Debugging with xkbcli

1. check the rules for a single char 
    ```bash
    > xkbcli how-to-type --layout us A
    keysym: A (0x0041)
    KEYCODE  KEY NAME  LAYOUT   LAYOUT NAME          LEVEL#  MODIFIERS
    38       AC01      1        English (US)         2       [ Shift ]
    38       AC01      1        English (US)         2       [ Lock ]
    ```
2. get the full keyamp in xkb format
    ```bash
    xkbcli compile-keymap --layout us    
    ```
    Look i.e for section that lists available keysyms for a given keyboard key
    ```
    ...
    xkb_symbols "pc_us_inet(evdev)" {
        name[Group1]="English (US)";

        key <ESC>                {      [          Escape ] };
        key <AE01>               {      [               1,          exclam ] };
        key <AE02>               {      [               2,              at ] };
    ...

    ```

# Contributing keysym to mnemonic name mappings

1. clone `libxkbcommon` project - https://github.com/xkbcommon/libxkbcommon
2. checkout tag for version 1.10.0 (tested release)
    ```bash
     git checkout xkbcommon-1.10.0
    ```
3. modify `scripts/update-keysyms-names-handling.py` script that is used to generate `src/ks_tables.h`
```
diff --git a/scripts/update-keysyms-names-handling.py b/scripts/update-keysyms-names-handling.py
index af50a004..d732c582 100755
--- a/scripts/update-keysyms-names-handling.py
+++ b/scripts/update-keysyms-names-handling.py
@@ -207,7 +207,7 @@ struct name_keysym {
 def print_entries(entries: Iterable[Keysym]):
     for entry in entries:
         print(
-            "    {{ 0x{value:08x}, {offs} }}, /* {name} */".format(
+            "    [ 0x{value:08x}, '{name}' ], ".format(
                 offs=entry_offsets[entry.name], value=entry.value, name=entry.name
             )
         )
@@ -218,11 +218,11 @@ print_entries(entries_isorted)
 print("};\n")
 
 # *.sort() is stable so we always get the first keysym for duplicate
-print("static const struct name_keysym keysym_to_name[] = {")
+print("const keysym_to_name = [")
 print_entries(
     next(g[1]) for g in itertools.groupby(entries_kssorted, key=lambda e: e.value)
 )
-print("};\n")
+print("];\n")
 
 
 def make_deprecated_entry(
```
4. run the script via the provided wrapper script
    ```bash
     scripts/update-keysyms
    ```
5. copy the generated `keysym_to_name` mapping from `src/ks_tables.h`