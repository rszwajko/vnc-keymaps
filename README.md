# vnc-keymaps

Libary part extracted from [PR 2486](https://github.com/kubevirt-ui/kubevirt-plugin/pull/2486)

The goal is to convert text copy-pasted to the VNC console to sequence of scancodes matching the language configured on the (remote) virtual machine. 
General steps in this use case:
1. get text from clipboard
2. for each Unicode code point get the keystrokes required to trigger it in the keyboard layout used on the remote machine
3. emulate user typing in the text - send the keystrokes to the server using QEMUExtendedKeyEvent

Mapping code point to keystrokes:

1. use ucs2keysym() method to convert Unicode code to X11 keysym code.    Functionality is part of xorg-server-1.12.2/hw/xquartz/keysym2ucs.c that was ported to TypeScript.
2. map keysym code to mnemonic name using Qemu vnc_keysym.h 
3. check if there is a mapping for that name in the keymap for the chosen keyboard layout. The keymaps originate from Qemu project where they are used to enforce a keyboard layout (-k switch)
4. resolved mapping consist of the scancode coressponding to physical    key and a list of modifieres i.e. shift, altgr, numlock.

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


Helpful links:
1. RFB protocol in Qemu - https://danielhb.github.io/article/2019/05/06/noVNC-QEMU-RFB.html
2. https://github.com/qemu/qemu/blob/b69801dd6b1eb4d107f7c2f643adf0a4e3ec9124/ui/vnc_keysym.h
3. https://github.com/qemu/qemu/tree/b69801dd6b1eb4d107f7c2f643adf0a4e3ec9124/pc-bios/keymaps
4. https://www.x.org/releases/X11R7.7/src/xserver/xorg-server-1.12.2.tar.gz