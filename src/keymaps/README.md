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