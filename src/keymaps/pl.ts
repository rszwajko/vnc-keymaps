// SPDX-License-Identifier: MIT
import { KeyMap } from '../types';
const keymap: KeyMap = [
  // evdev scancode 0x1 xkb keycode 9 xkb keyname ESC  level 1 keysym 0xff1b
  ['Escape', 0x1],
  // evdev scancode 0x2 xkb keycode 10 xkb keyname AE01  level 1 keysym 0x31
  ['1', 0x2],
  // evdev scancode 0x2 xkb keycode 10 xkb keyname AE01  level 2 keysym 0x21
  ['exclam', 0x2, 'shift'],
  // evdev scancode 0x2 xkb keycode 10 xkb keyname AE01  level 3 keysym 0x8bd
  ['notequal', 0x2, 'altgr'],
  // evdev scancode 0x2 xkb keycode 10 xkb keyname AE01  level 4 keysym 0xa1
  ['exclamdown', 0x2, 'shift', 'altgr'],
  // evdev scancode 0x3 xkb keycode 11 xkb keyname AE02  level 1 keysym 0x32
  ['2', 0x3],
  // evdev scancode 0x3 xkb keycode 11 xkb keyname AE02  level 2 keysym 0x40
  ['at', 0x3, 'shift'],
  // evdev scancode 0x3 xkb keycode 11 xkb keyname AE02  level 3 keysym 0xb2
  ['twosuperior', 0x3, 'altgr'],
  // evdev scancode 0x3 xkb keycode 11 xkb keyname AE02  level 4 keysym 0xbf
  ['questiondown', 0x3, 'shift', 'altgr'],
  // evdev scancode 0x4 xkb keycode 12 xkb keyname AE03  level 1 keysym 0x33
  ['3', 0x4],
  // evdev scancode 0x4 xkb keycode 12 xkb keyname AE03  level 2 keysym 0x23
  ['numbersign', 0x4, 'shift'],
  // evdev scancode 0x4 xkb keycode 12 xkb keyname AE03  level 3 keysym 0xb3
  ['threesuperior', 0x4, 'altgr'],
  // evdev scancode 0x4 xkb keycode 12 xkb keyname AE03  level 4 keysym 0xa3
  ['sterling', 0x4, 'shift', 'altgr'],
  // evdev scancode 0x5 xkb keycode 13 xkb keyname AE04  level 1 keysym 0x34
  ['4', 0x5],
  // evdev scancode 0x5 xkb keycode 13 xkb keyname AE04  level 2 keysym 0x24
  ['dollar', 0x5, 'shift'],
  // evdev scancode 0x5 xkb keycode 13 xkb keyname AE04  level 3 keysym 0xa2
  ['cent', 0x5, 'altgr'],
  // evdev scancode 0x5 xkb keycode 13 xkb keyname AE04  level 4 keysym 0xbc
  ['onequarter', 0x5, 'shift', 'altgr'],
  // evdev scancode 0x6 xkb keycode 14 xkb keyname AE05  level 1 keysym 0x35
  ['5', 0x6],
  // evdev scancode 0x6 xkb keycode 14 xkb keyname AE05  level 2 keysym 0x25
  ['percent', 0x6, 'shift'],
  // evdev scancode 0x6 xkb keycode 14 xkb keyname AE05  level 3 keysym 0x20ac
  ['EuroSign', 0x6, 'altgr'],
  // evdev scancode 0x6 xkb keycode 14 xkb keyname AE05  level 4 keysym 0xad5
  ['permille', 0x6, 'shift', 'altgr'],
  // evdev scancode 0x7 xkb keycode 15 xkb keyname AE06  level 1 keysym 0x36
  ['6', 0x7],
  // evdev scancode 0x7 xkb keycode 15 xkb keyname AE06  level 2 keysym 0x5e
  ['asciicircum', 0x7, 'shift'],
  // evdev scancode 0x7 xkb keycode 15 xkb keyname AE06  level 3 keysym 0xbd
  ['onehalf', 0x7, 'altgr'],
  // evdev scancode 0x7 xkb keycode 15 xkb keyname AE06  level 4 keysym 0x8de
  ['logicaland', 0x7, 'shift', 'altgr'],
  // evdev scancode 0x8 xkb keycode 16 xkb keyname AE07  level 1 keysym 0x37
  ['7', 0x8],
  // evdev scancode 0x8 xkb keycode 16 xkb keyname AE07  level 2 keysym 0x26
  ['ampersand', 0x8, 'shift'],
  // evdev scancode 0x8 xkb keycode 16 xkb keyname AE07  level 3 keysym 0xa7
  ['section', 0x8, 'altgr'],
  // evdev scancode 0x8 xkb keycode 16 xkb keyname AE07  level 4 keysym 0x1002248
  ['approxeq', 0x8, 'shift', 'altgr'],
  // evdev scancode 0x9 xkb keycode 17 xkb keyname AE08  level 1 keysym 0x38
  ['8', 0x9],
  // evdev scancode 0x9 xkb keycode 17 xkb keyname AE08  level 2 keysym 0x2a
  ['asterisk', 0x9, 'shift'],
  // evdev scancode 0x9 xkb keycode 17 xkb keyname AE08  level 3 keysym 0xb7
  ['periodcentered', 0x9, 'altgr'],
  // evdev scancode 0x9 xkb keycode 17 xkb keyname AE08  level 4 keysym 0xbe
  ['threequarters', 0x9, 'shift', 'altgr'],
  // evdev scancode 0xa xkb keycode 18 xkb keyname AE09  level 1 keysym 0x39
  ['9', 0xa],
  // evdev scancode 0xa xkb keycode 18 xkb keyname AE09  level 2 keysym 0x28
  ['parenleft', 0xa, 'shift'],
  // evdev scancode 0xa xkb keycode 18 xkb keyname AE09  level 3 keysym 0xab
  ['guillemotleft', 0xa, 'altgr'],
  // evdev scancode 0xa xkb keycode 18 xkb keyname AE09  level 4 keysym 0xb1
  ['plusminus', 0xa, 'shift', 'altgr'],
  // evdev scancode 0xb xkb keycode 19 xkb keyname AE10  level 1 keysym 0x30
  ['0', 0xb],
  // evdev scancode 0xb xkb keycode 19 xkb keyname AE10  level 2 keysym 0x29
  ['parenright', 0xb, 'shift'],
  // evdev scancode 0xb xkb keycode 19 xkb keyname AE10  level 3 keysym 0xbb
  ['guillemotright', 0xb, 'altgr'],
  // evdev scancode 0xb xkb keycode 19 xkb keyname AE10  level 4 keysym 0xb0
  ['degree', 0xb, 'shift', 'altgr'],
  // evdev scancode 0xc xkb keycode 20 xkb keyname AE11  level 1 keysym 0x2d
  ['minus', 0xc],
  // evdev scancode 0xc xkb keycode 20 xkb keyname AE11  level 2 keysym 0x5f
  ['underscore', 0xc, 'shift'],
  // evdev scancode 0xc xkb keycode 20 xkb keyname AE11  level 3 keysym 0xaaa
  ['endash', 0xc, 'altgr'],
  // evdev scancode 0xc xkb keycode 20 xkb keyname AE11  level 4 keysym 0xaa9
  ['emdash', 0xc, 'shift', 'altgr'],
  // evdev scancode 0xd xkb keycode 21 xkb keyname AE12  level 1 keysym 0x3d
  ['equal', 0xd],
  // evdev scancode 0xd xkb keycode 21 xkb keyname AE12  level 2 keysym 0x2b
  ['plus', 0xd, 'shift'],
  // evdev scancode 0xd xkb keycode 21 xkb keyname AE12  level 3 keysym 0xfe5b
  ['dead_cedilla', 0xd, 'altgr'],
  // evdev scancode 0xd xkb keycode 21 xkb keyname AE12  level 4 keysym 0xfe5c
  ['dead_ogonek', 0xd, 'shift', 'altgr'],
  // evdev scancode 0xe xkb keycode 22 xkb keyname BKSP  level 1 keysym 0xff08
  ['BackSpace', 0xe],
  // evdev scancode 0xe xkb keycode 22 xkb keyname BKSP  level 2 keysym 0xff08
  ['BackSpace', 0xe, 'shift'],
  // evdev scancode 0xf xkb keycode 23 xkb keyname TAB  level 1 keysym 0xff09
  ['Tab', 0xf],
  // evdev scancode 0xf xkb keycode 23 xkb keyname TAB  level 2 keysym 0xfe20
  ['ISO_Left_Tab', 0xf, 'shift'],
  // evdev scancode 0x10 xkb keycode 24 xkb keyname AD01  level 1 keysym 0x71
  ['q', 0x10],
  // evdev scancode 0x10 xkb keycode 24 xkb keyname AD01  level 1 keysym 0x71
  //['q', 0x10, 'shift', 'Lock'],
  // evdev scancode 0x10 xkb keycode 24 xkb keyname AD01  level 2 keysym 0x51
  ['Q', 0x10, 'shift'],
  // evdev scancode 0x10 xkb keycode 24 xkb keyname AD01  level 2 keysym 0x51
  //['Q', 0x10, 'Lock'],
  // evdev scancode 0x10 xkb keycode 24 xkb keyname AD01  level 3 keysym 0x7f0
  ['Greek_pi', 0x10, 'altgr'],
  // evdev scancode 0x10 xkb keycode 24 xkb keyname AD01  level 3 keysym 0x7f0
  //['Greek_pi', 0x10, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x10 xkb keycode 24 xkb keyname AD01  level 4 keysym 0x7d9
  ['Greek_OMEGA', 0x10, 'shift', 'altgr'],
  // evdev scancode 0x10 xkb keycode 24 xkb keyname AD01  level 4 keysym 0x7d9
  //['Greek_OMEGA', 0x10, 'Lock', 'altgr'],
  // evdev scancode 0x11 xkb keycode 25 xkb keyname AD02  level 1 keysym 0x77
  ['w', 0x11],
  // evdev scancode 0x11 xkb keycode 25 xkb keyname AD02  level 1 keysym 0x77
  //['w', 0x11, 'shift', 'Lock'],
  // evdev scancode 0x11 xkb keycode 25 xkb keyname AD02  level 2 keysym 0x57
  ['W', 0x11, 'shift'],
  // evdev scancode 0x11 xkb keycode 25 xkb keyname AD02  level 2 keysym 0x57
  //['W', 0x11, 'Lock'],
  // evdev scancode 0x11 xkb keycode 25 xkb keyname AD02  level 3 keysym 0x13bd
  ['oe', 0x11, 'altgr'],
  // evdev scancode 0x11 xkb keycode 25 xkb keyname AD02  level 3 keysym 0x13bd
  //['oe', 0x11, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x11 xkb keycode 25 xkb keyname AD02  level 4 keysym 0x13bc
  ['OE', 0x11, 'shift', 'altgr'],
  // evdev scancode 0x11 xkb keycode 25 xkb keyname AD02  level 4 keysym 0x13bc
  //['OE', 0x11, 'Lock', 'altgr'],
  // evdev scancode 0x12 xkb keycode 26 xkb keyname AD03  level 1 keysym 0x65
  ['e', 0x12],
  // evdev scancode 0x12 xkb keycode 26 xkb keyname AD03  level 1 keysym 0x65
  //['e', 0x12, 'shift', 'Lock'],
  // evdev scancode 0x12 xkb keycode 26 xkb keyname AD03  level 2 keysym 0x45
  ['E', 0x12, 'shift'],
  // evdev scancode 0x12 xkb keycode 26 xkb keyname AD03  level 2 keysym 0x45
  //['E', 0x12, 'Lock'],
  // evdev scancode 0x12 xkb keycode 26 xkb keyname AD03  level 3 keysym 0x1ea
  ['eogonek', 0x12, 'altgr'],
  // evdev scancode 0x12 xkb keycode 26 xkb keyname AD03  level 3 keysym 0x1ea
  //['eogonek', 0x12, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x12 xkb keycode 26 xkb keyname AD03  level 4 keysym 0x1ca
  ['Eogonek', 0x12, 'shift', 'altgr'],
  // evdev scancode 0x12 xkb keycode 26 xkb keyname AD03  level 4 keysym 0x1ca
  //['Eogonek', 0x12, 'Lock', 'altgr'],
  // evdev scancode 0x13 xkb keycode 27 xkb keyname AD04  level 1 keysym 0x72
  ['r', 0x13],
  // evdev scancode 0x13 xkb keycode 27 xkb keyname AD04  level 1 keysym 0x72
  //['r', 0x13, 'shift', 'Lock'],
  // evdev scancode 0x13 xkb keycode 27 xkb keyname AD04  level 2 keysym 0x52
  ['R', 0x13, 'shift'],
  // evdev scancode 0x13 xkb keycode 27 xkb keyname AD04  level 2 keysym 0x52
  //['R', 0x13, 'Lock'],
  // evdev scancode 0x13 xkb keycode 27 xkb keyname AD04  level 3 keysym 0xa9
  ['copyright', 0x13, 'altgr'],
  // evdev scancode 0x13 xkb keycode 27 xkb keyname AD04  level 3 keysym 0xa9
  //['copyright', 0x13, 'Lock', 'altgr'],
  // evdev scancode 0x13 xkb keycode 27 xkb keyname AD04  level 4 keysym 0xae
  ['registered', 0x13, 'shift', 'altgr'],
  // evdev scancode 0x13 xkb keycode 27 xkb keyname AD04  level 4 keysym 0xae
  //['registered', 0x13, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x14 xkb keycode 28 xkb keyname AD05  level 1 keysym 0x74
  ['t', 0x14],
  // evdev scancode 0x14 xkb keycode 28 xkb keyname AD05  level 1 keysym 0x74
  //['t', 0x14, 'shift', 'Lock'],
  // evdev scancode 0x14 xkb keycode 28 xkb keyname AD05  level 2 keysym 0x54
  ['T', 0x14, 'shift'],
  // evdev scancode 0x14 xkb keycode 28 xkb keyname AD05  level 2 keysym 0x54
  //['T', 0x14, 'Lock'],
  // evdev scancode 0x14 xkb keycode 28 xkb keyname AD05  level 3 keysym 0xdf
  ['ssharp', 0x14, 'altgr'],
  // evdev scancode 0x14 xkb keycode 28 xkb keyname AD05  level 3 keysym 0xdf
  //['ssharp', 0x14, 'Lock', 'altgr'],
  // evdev scancode 0x14 xkb keycode 28 xkb keyname AD05  level 4 keysym 0xac9
  ['trademark', 0x14, 'shift', 'altgr'],
  // evdev scancode 0x14 xkb keycode 28 xkb keyname AD05  level 4 keysym 0xac9
  //['trademark', 0x14, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x15 xkb keycode 29 xkb keyname AD06  level 1 keysym 0x79
  ['y', 0x15],
  // evdev scancode 0x15 xkb keycode 29 xkb keyname AD06  level 1 keysym 0x79
  //['y', 0x15, 'shift', 'Lock'],
  // evdev scancode 0x15 xkb keycode 29 xkb keyname AD06  level 2 keysym 0x59
  ['Y', 0x15, 'shift'],
  // evdev scancode 0x15 xkb keycode 29 xkb keyname AD06  level 2 keysym 0x59
  //['Y', 0x15, 'Lock'],
  // evdev scancode 0x15 xkb keycode 29 xkb keyname AD06  level 3 keysym 0x8fb
  ['leftarrow', 0x15, 'altgr'],
  // evdev scancode 0x15 xkb keycode 29 xkb keyname AD06  level 3 keysym 0x8fb
  //['leftarrow', 0x15, 'Lock', 'altgr'],
  // evdev scancode 0x15 xkb keycode 29 xkb keyname AD06  level 4 keysym 0xa5
  ['yen', 0x15, 'shift', 'altgr'],
  // evdev scancode 0x15 xkb keycode 29 xkb keyname AD06  level 4 keysym 0xa5
  //['yen', 0x15, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x16 xkb keycode 30 xkb keyname AD07  level 1 keysym 0x75
  ['u', 0x16],
  // evdev scancode 0x16 xkb keycode 30 xkb keyname AD07  level 1 keysym 0x75
  //['u', 0x16, 'shift', 'Lock'],
  // evdev scancode 0x16 xkb keycode 30 xkb keyname AD07  level 2 keysym 0x55
  ['U', 0x16, 'shift'],
  // evdev scancode 0x16 xkb keycode 30 xkb keyname AD07  level 2 keysym 0x55
  //['U', 0x16, 'Lock'],
  // evdev scancode 0x16 xkb keycode 30 xkb keyname AD07  level 3 keysym 0x8fe
  ['downarrow', 0x16, 'altgr'],
  // evdev scancode 0x16 xkb keycode 30 xkb keyname AD07  level 3 keysym 0x8fe
  //['downarrow', 0x16, 'Lock', 'altgr'],
  // evdev scancode 0x16 xkb keycode 30 xkb keyname AD07  level 4 keysym 0x8fc
  ['uparrow', 0x16, 'shift', 'altgr'],
  // evdev scancode 0x16 xkb keycode 30 xkb keyname AD07  level 4 keysym 0x8fc
  //['uparrow', 0x16, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x17 xkb keycode 31 xkb keyname AD08  level 1 keysym 0x69
  ['i', 0x17],
  // evdev scancode 0x17 xkb keycode 31 xkb keyname AD08  level 1 keysym 0x69
  //['i', 0x17, 'shift', 'Lock'],
  // evdev scancode 0x17 xkb keycode 31 xkb keyname AD08  level 2 keysym 0x49
  ['I', 0x17, 'shift'],
  // evdev scancode 0x17 xkb keycode 31 xkb keyname AD08  level 2 keysym 0x49
  //['I', 0x17, 'Lock'],
  // evdev scancode 0x17 xkb keycode 31 xkb keyname AD08  level 3 keysym 0x8fd
  ['rightarrow', 0x17, 'altgr'],
  // evdev scancode 0x17 xkb keycode 31 xkb keyname AD08  level 3 keysym 0x8fd
  //['rightarrow', 0x17, 'Lock', 'altgr'],
  // evdev scancode 0x17 xkb keycode 31 xkb keyname AD08  level 4 keysym 0x1002194
  ['U2194', 0x17, 'shift', 'altgr'],
  // evdev scancode 0x17 xkb keycode 31 xkb keyname AD08  level 4 keysym 0x1002194
  //['U2194', 0x17, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x18 xkb keycode 32 xkb keyname AD09  level 1 keysym 0x6f
  ['o', 0x18],
  // evdev scancode 0x18 xkb keycode 32 xkb keyname AD09  level 1 keysym 0x6f
  //['o', 0x18, 'shift', 'Lock'],
  // evdev scancode 0x18 xkb keycode 32 xkb keyname AD09  level 2 keysym 0x4f
  ['O', 0x18, 'shift'],
  // evdev scancode 0x18 xkb keycode 32 xkb keyname AD09  level 2 keysym 0x4f
  //['O', 0x18, 'Lock'],
  // evdev scancode 0x18 xkb keycode 32 xkb keyname AD09  level 3 keysym 0xf3
  ['oacute', 0x18, 'altgr'],
  // evdev scancode 0x18 xkb keycode 32 xkb keyname AD09  level 3 keysym 0xf3
  //['oacute', 0x18, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x18 xkb keycode 32 xkb keyname AD09  level 4 keysym 0xd3
  ['Oacute', 0x18, 'shift', 'altgr'],
  // evdev scancode 0x18 xkb keycode 32 xkb keyname AD09  level 4 keysym 0xd3
  //['Oacute', 0x18, 'Lock', 'altgr'],
  // evdev scancode 0x19 xkb keycode 33 xkb keyname AD10  level 1 keysym 0x70
  ['p', 0x19],
  // evdev scancode 0x19 xkb keycode 33 xkb keyname AD10  level 1 keysym 0x70
  //['p', 0x19, 'shift', 'Lock'],
  // evdev scancode 0x19 xkb keycode 33 xkb keyname AD10  level 2 keysym 0x50
  ['P', 0x19, 'shift'],
  // evdev scancode 0x19 xkb keycode 33 xkb keyname AD10  level 2 keysym 0x50
  //['P', 0x19, 'Lock'],
  // evdev scancode 0x19 xkb keycode 33 xkb keyname AD10  level 3 keysym 0xfe
  ['thorn', 0x19, 'altgr'],
  // evdev scancode 0x19 xkb keycode 33 xkb keyname AD10  level 3 keysym 0xfe
  //['thorn', 0x19, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x19 xkb keycode 33 xkb keyname AD10  level 4 keysym 0xde
  ['THORN', 0x19, 'shift', 'altgr'],
  // evdev scancode 0x19 xkb keycode 33 xkb keyname AD10  level 4 keysym 0xde
  //['THORN', 0x19, 'Lock', 'altgr'],
  // evdev scancode 0x1a xkb keycode 34 xkb keyname AD11  level 1 keysym 0x5b
  ['bracketleft', 0x1a],
  // evdev scancode 0x1a xkb keycode 34 xkb keyname AD11  level 2 keysym 0x7b
  ['braceleft', 0x1a, 'shift'],
  // evdev scancode 0x1a xkb keycode 34 xkb keyname AD11  level 3 keysym 0xfe57
  ['dead_diaeresis', 0x1a, 'altgr'],
  // evdev scancode 0x1a xkb keycode 34 xkb keyname AD11  level 4 keysym 0xfe58
  ['dead_abovering', 0x1a, 'shift', 'altgr'],
  // evdev scancode 0x1b xkb keycode 35 xkb keyname AD12  level 1 keysym 0x5d
  ['bracketright', 0x1b],
  // evdev scancode 0x1b xkb keycode 35 xkb keyname AD12  level 2 keysym 0x7d
  ['braceright', 0x1b, 'shift'],
  // evdev scancode 0x1b xkb keycode 35 xkb keyname AD12  level 3 keysym 0xfe53
  ['dead_tilde', 0x1b, 'altgr'],
  // evdev scancode 0x1b xkb keycode 35 xkb keyname AD12  level 4 keysym 0xfe54
  ['dead_macron', 0x1b, 'shift', 'altgr'],
  // evdev scancode 0x1c xkb keycode 36 xkb keyname RTRN  level 1 keysym 0xff0d
  ['Return', 0x1c],
  // evdev scancode 0x1d xkb keycode 37 xkb keyname LCTL  level 1 keysym 0xffe3
  ['control_L', 0x1d],
  // evdev scancode 0x1e xkb keycode 38 xkb keyname AC01  level 1 keysym 0x61
  ['a', 0x1e],
  // evdev scancode 0x1e xkb keycode 38 xkb keyname AC01  level 1 keysym 0x61
  //['a', 0x1e, 'shift', 'Lock'],
  // evdev scancode 0x1e xkb keycode 38 xkb keyname AC01  level 2 keysym 0x41
  ['A', 0x1e, 'shift'],
  // evdev scancode 0x1e xkb keycode 38 xkb keyname AC01  level 2 keysym 0x41
  //['A', 0x1e, 'Lock'],
  // evdev scancode 0x1e xkb keycode 38 xkb keyname AC01  level 3 keysym 0x1b1
  ['aogonek', 0x1e, 'altgr'],
  // evdev scancode 0x1e xkb keycode 38 xkb keyname AC01  level 3 keysym 0x1b1
  //['aogonek', 0x1e, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x1e xkb keycode 38 xkb keyname AC01  level 4 keysym 0x1a1
  ['Aogonek', 0x1e, 'shift', 'altgr'],
  // evdev scancode 0x1e xkb keycode 38 xkb keyname AC01  level 4 keysym 0x1a1
  //['Aogonek', 0x1e, 'Lock', 'altgr'],
  // evdev scancode 0x1f xkb keycode 39 xkb keyname AC02  level 1 keysym 0x73
  ['s', 0x1f],
  // evdev scancode 0x1f xkb keycode 39 xkb keyname AC02  level 1 keysym 0x73
  //['s', 0x1f, 'shift', 'Lock'],
  // evdev scancode 0x1f xkb keycode 39 xkb keyname AC02  level 2 keysym 0x53
  ['S', 0x1f, 'shift'],
  // evdev scancode 0x1f xkb keycode 39 xkb keyname AC02  level 2 keysym 0x53
  //['S', 0x1f, 'Lock'],
  // evdev scancode 0x1f xkb keycode 39 xkb keyname AC02  level 3 keysym 0x1b6
  ['sacute', 0x1f, 'altgr'],
  // evdev scancode 0x1f xkb keycode 39 xkb keyname AC02  level 3 keysym 0x1b6
  //['sacute', 0x1f, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x1f xkb keycode 39 xkb keyname AC02  level 4 keysym 0x1a6
  ['Sacute', 0x1f, 'shift', 'altgr'],
  // evdev scancode 0x1f xkb keycode 39 xkb keyname AC02  level 4 keysym 0x1a6
  //['Sacute', 0x1f, 'Lock', 'altgr'],
  // evdev scancode 0x20 xkb keycode 40 xkb keyname AC03  level 1 keysym 0x64
  ['d', 0x20],
  // evdev scancode 0x20 xkb keycode 40 xkb keyname AC03  level 1 keysym 0x64
  //['d', 0x20, 'shift', 'Lock'],
  // evdev scancode 0x20 xkb keycode 40 xkb keyname AC03  level 2 keysym 0x44
  ['D', 0x20, 'shift'],
  // evdev scancode 0x20 xkb keycode 40 xkb keyname AC03  level 2 keysym 0x44
  //['D', 0x20, 'Lock'],
  // evdev scancode 0x20 xkb keycode 40 xkb keyname AC03  level 3 keysym 0xf0
  ['eth', 0x20, 'altgr'],
  // evdev scancode 0x20 xkb keycode 40 xkb keyname AC03  level 3 keysym 0xf0
  //['eth', 0x20, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x20 xkb keycode 40 xkb keyname AC03  level 4 keysym 0xd0
  ['ETH', 0x20, 'shift', 'altgr'],
  // evdev scancode 0x20 xkb keycode 40 xkb keyname AC03  level 4 keysym 0xd0
  //['ETH', 0x20, 'Lock', 'altgr'],
  // evdev scancode 0x21 xkb keycode 41 xkb keyname AC04  level 1 keysym 0x66
  ['f', 0x21],
  // evdev scancode 0x21 xkb keycode 41 xkb keyname AC04  level 1 keysym 0x66
  //['f', 0x21, 'shift', 'Lock'],
  // evdev scancode 0x21 xkb keycode 41 xkb keyname AC04  level 2 keysym 0x46
  ['F', 0x21, 'shift'],
  // evdev scancode 0x21 xkb keycode 41 xkb keyname AC04  level 2 keysym 0x46
  //['F', 0x21, 'Lock'],
  // evdev scancode 0x21 xkb keycode 41 xkb keyname AC04  level 3 keysym 0xe6
  ['ae', 0x21, 'altgr'],
  // evdev scancode 0x21 xkb keycode 41 xkb keyname AC04  level 3 keysym 0xe6
  //['ae', 0x21, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x21 xkb keycode 41 xkb keyname AC04  level 4 keysym 0xc6
  ['AE', 0x21, 'shift', 'altgr'],
  // evdev scancode 0x21 xkb keycode 41 xkb keyname AC04  level 4 keysym 0xc6
  //['AE', 0x21, 'Lock', 'altgr'],
  // evdev scancode 0x22 xkb keycode 42 xkb keyname AC05  level 1 keysym 0x67
  ['g', 0x22],
  // evdev scancode 0x22 xkb keycode 42 xkb keyname AC05  level 1 keysym 0x67
  //['g', 0x22, 'shift', 'Lock'],
  // evdev scancode 0x22 xkb keycode 42 xkb keyname AC05  level 2 keysym 0x47
  ['G', 0x22, 'shift'],
  // evdev scancode 0x22 xkb keycode 42 xkb keyname AC05  level 2 keysym 0x47
  //['G', 0x22, 'Lock'],
  // evdev scancode 0x22 xkb keycode 42 xkb keyname AC05  level 3 keysym 0x3bf
  ['eng', 0x22, 'altgr'],
  // evdev scancode 0x22 xkb keycode 42 xkb keyname AC05  level 3 keysym 0x3bf
  //['eng', 0x22, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x22 xkb keycode 42 xkb keyname AC05  level 4 keysym 0x3bd
  ['ENG', 0x22, 'shift', 'altgr'],
  // evdev scancode 0x22 xkb keycode 42 xkb keyname AC05  level 4 keysym 0x3bd
  //['ENG', 0x22, 'Lock', 'altgr'],
  // evdev scancode 0x23 xkb keycode 43 xkb keyname AC06  level 1 keysym 0x68
  ['h', 0x23],
  // evdev scancode 0x23 xkb keycode 43 xkb keyname AC06  level 1 keysym 0x68
  //['h', 0x23, 'shift', 'Lock'],
  // evdev scancode 0x23 xkb keycode 43 xkb keyname AC06  level 2 keysym 0x48
  ['H', 0x23, 'shift'],
  // evdev scancode 0x23 xkb keycode 43 xkb keyname AC06  level 2 keysym 0x48
  //['H', 0x23, 'Lock'],
  // evdev scancode 0x23 xkb keycode 43 xkb keyname AC06  level 3 keysym 0xad1
  ['rightsinglequotemark', 0x23, 'altgr'],
  // evdev scancode 0x23 xkb keycode 43 xkb keyname AC06  level 3 keysym 0xad1
  //['rightsinglequotemark', 0x23, 'Lock', 'altgr'],
  // evdev scancode 0x23 xkb keycode 43 xkb keyname AC06  level 4 keysym 0x1002022
  ['U2022', 0x23, 'shift', 'altgr'],
  // evdev scancode 0x23 xkb keycode 43 xkb keyname AC06  level 4 keysym 0x1002022
  //['U2022', 0x23, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x24 xkb keycode 44 xkb keyname AC07  level 1 keysym 0x6a
  ['j', 0x24],
  // evdev scancode 0x24 xkb keycode 44 xkb keyname AC07  level 1 keysym 0x6a
  //['j', 0x24, 'shift', 'Lock'],
  // evdev scancode 0x24 xkb keycode 44 xkb keyname AC07  level 2 keysym 0x4a
  ['J', 0x24, 'shift'],
  // evdev scancode 0x24 xkb keycode 44 xkb keyname AC07  level 2 keysym 0x4a
  //['J', 0x24, 'Lock'],
  // evdev scancode 0x24 xkb keycode 44 xkb keyname AC07  level 3 keysym 0x1000259
  ['schwa', 0x24, 'altgr'],
  // evdev scancode 0x24 xkb keycode 44 xkb keyname AC07  level 3 keysym 0x1000259
  //['schwa', 0x24, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x24 xkb keycode 44 xkb keyname AC07  level 4 keysym 0x100018f
  ['SCHWA', 0x24, 'shift', 'altgr'],
  // evdev scancode 0x24 xkb keycode 44 xkb keyname AC07  level 4 keysym 0x100018f
  //['SCHWA', 0x24, 'Lock', 'altgr'],
  // evdev scancode 0x25 xkb keycode 45 xkb keyname AC08  level 1 keysym 0x6b
  ['k', 0x25],
  // evdev scancode 0x25 xkb keycode 45 xkb keyname AC08  level 1 keysym 0x6b
  //['k', 0x25, 'shift', 'Lock'],
  // evdev scancode 0x25 xkb keycode 45 xkb keyname AC08  level 2 keysym 0x4b
  ['K', 0x25, 'shift'],
  // evdev scancode 0x25 xkb keycode 45 xkb keyname AC08  level 2 keysym 0x4b
  //['K', 0x25, 'Lock'],
  // evdev scancode 0x25 xkb keycode 45 xkb keyname AC08  level 3 keysym 0xaae
  ['ellipsis', 0x25, 'altgr'],
  // evdev scancode 0x25 xkb keycode 45 xkb keyname AC08  level 3 keysym 0xaae
  //['ellipsis', 0x25, 'Lock', 'altgr'],
  // evdev scancode 0x25 xkb keycode 45 xkb keyname AC08  level 4 keysym 0xfe63
  ['dead_stroke', 0x25, 'shift', 'altgr'],
  // evdev scancode 0x25 xkb keycode 45 xkb keyname AC08  level 4 keysym 0xfe63
  //['dead_stroke', 0x25, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x26 xkb keycode 46 xkb keyname AC09  level 1 keysym 0x6c
  ['l', 0x26],
  // evdev scancode 0x26 xkb keycode 46 xkb keyname AC09  level 1 keysym 0x6c
  //['l', 0x26, 'shift', 'Lock'],
  // evdev scancode 0x26 xkb keycode 46 xkb keyname AC09  level 2 keysym 0x4c
  ['L', 0x26, 'shift'],
  // evdev scancode 0x26 xkb keycode 46 xkb keyname AC09  level 2 keysym 0x4c
  //['L', 0x26, 'Lock'],
  // evdev scancode 0x26 xkb keycode 46 xkb keyname AC09  level 3 keysym 0x1b3
  ['lstroke', 0x26, 'altgr'],
  // evdev scancode 0x26 xkb keycode 46 xkb keyname AC09  level 3 keysym 0x1b3
  //['lstroke', 0x26, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x26 xkb keycode 46 xkb keyname AC09  level 4 keysym 0x1a3
  ['Lstroke', 0x26, 'shift', 'altgr'],
  // evdev scancode 0x26 xkb keycode 46 xkb keyname AC09  level 4 keysym 0x1a3
  //['Lstroke', 0x26, 'Lock', 'altgr'],
  // evdev scancode 0x27 xkb keycode 47 xkb keyname AC10  level 1 keysym 0x3b
  ['semicolon', 0x27],
  // evdev scancode 0x27 xkb keycode 47 xkb keyname AC10  level 2 keysym 0x3a
  ['colon', 0x27, 'shift'],
  // evdev scancode 0x27 xkb keycode 47 xkb keyname AC10  level 3 keysym 0xfe51
  ['dead_acute', 0x27, 'altgr'],
  // evdev scancode 0x27 xkb keycode 47 xkb keyname AC10  level 4 keysym 0xfe59
  ['dead_doubleacute', 0x27, 'shift', 'altgr'],
  // evdev scancode 0x28 xkb keycode 48 xkb keyname AC11  level 1 keysym 0x27
  ['apostrophe', 0x28],
  // evdev scancode 0x28 xkb keycode 48 xkb keyname AC11  level 2 keysym 0x22
  ['quotedbl', 0x28, 'shift'],
  // evdev scancode 0x28 xkb keycode 48 xkb keyname AC11  level 3 keysym 0xfe52
  ['dead_circumflex', 0x28, 'altgr'],
  // evdev scancode 0x28 xkb keycode 48 xkb keyname AC11  level 4 keysym 0xfe5a
  ['dead_caron', 0x28, 'shift', 'altgr'],
  // evdev scancode 0x29 xkb keycode 49 xkb keyname TLDE  level 1 keysym 0x60
  ['grave', 0x29],
  // evdev scancode 0x29 xkb keycode 49 xkb keyname TLDE  level 2 keysym 0x7e
  ['asciitilde', 0x29, 'shift'],
  // evdev scancode 0x29 xkb keycode 49 xkb keyname TLDE  level 3 keysym 0xac
  ['notsign', 0x29, 'altgr'],
  // evdev scancode 0x29 xkb keycode 49 xkb keyname TLDE  level 4 keysym 0x8df
  ['logicalor', 0x29, 'shift', 'altgr'],
  // evdev scancode 0x2a xkb keycode 50 xkb keyname LFSH  level 1 keysym 0xffe1
  ['shift_L', 0x2a],
  // evdev scancode 0x2b xkb keycode 51 xkb keyname BKSL  level 1 keysym 0x5c
  ['backslash', 0x2b],
  // evdev scancode 0x2b xkb keycode 51 xkb keyname BKSL  level 2 keysym 0x7c
  ['bar', 0x2b, 'shift'],
  // evdev scancode 0x2b xkb keycode 51 xkb keyname BKSL  level 3 keysym 0xfe50
  ['dead_grave', 0x2b, 'altgr'],
  // evdev scancode 0x2b xkb keycode 51 xkb keyname BKSL  level 4 keysym 0xfe55
  ['dead_breve', 0x2b, 'shift', 'altgr'],
  // evdev scancode 0x2c xkb keycode 52 xkb keyname AB01  level 1 keysym 0x7a
  ['z', 0x2c],
  // evdev scancode 0x2c xkb keycode 52 xkb keyname AB01  level 1 keysym 0x7a
  //['z', 0x2c, 'shift', 'Lock'],
  // evdev scancode 0x2c xkb keycode 52 xkb keyname AB01  level 2 keysym 0x5a
  ['Z', 0x2c, 'shift'],
  // evdev scancode 0x2c xkb keycode 52 xkb keyname AB01  level 2 keysym 0x5a
  //['Z', 0x2c, 'Lock'],
  // evdev scancode 0x2c xkb keycode 52 xkb keyname AB01  level 3 keysym 0x1bf
  ['zabovedot', 0x2c, 'altgr'],
  // evdev scancode 0x2c xkb keycode 52 xkb keyname AB01  level 3 keysym 0x1bf
  //['zabovedot', 0x2c, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x2c xkb keycode 52 xkb keyname AB01  level 4 keysym 0x1af
  ['Zabovedot', 0x2c, 'shift', 'altgr'],
  // evdev scancode 0x2c xkb keycode 52 xkb keyname AB01  level 4 keysym 0x1af
  //['Zabovedot', 0x2c, 'Lock', 'altgr'],
  // evdev scancode 0x2d xkb keycode 53 xkb keyname AB02  level 1 keysym 0x78
  ['x', 0x2d],
  // evdev scancode 0x2d xkb keycode 53 xkb keyname AB02  level 1 keysym 0x78
  //['x', 0x2d, 'shift', 'Lock'],
  // evdev scancode 0x2d xkb keycode 53 xkb keyname AB02  level 2 keysym 0x58
  ['X', 0x2d, 'shift'],
  // evdev scancode 0x2d xkb keycode 53 xkb keyname AB02  level 2 keysym 0x58
  //['X', 0x2d, 'Lock'],
  // evdev scancode 0x2d xkb keycode 53 xkb keyname AB02  level 3 keysym 0x1bc
  ['zacute', 0x2d, 'altgr'],
  // evdev scancode 0x2d xkb keycode 53 xkb keyname AB02  level 3 keysym 0x1bc
  //['zacute', 0x2d, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x2d xkb keycode 53 xkb keyname AB02  level 4 keysym 0x1ac
  ['Zacute', 0x2d, 'shift', 'altgr'],
  // evdev scancode 0x2d xkb keycode 53 xkb keyname AB02  level 4 keysym 0x1ac
  //['Zacute', 0x2d, 'Lock', 'altgr'],
  // evdev scancode 0x2e xkb keycode 54 xkb keyname AB03  level 1 keysym 0x63
  ['c', 0x2e],
  // evdev scancode 0x2e xkb keycode 54 xkb keyname AB03  level 1 keysym 0x63
  //['c', 0x2e, 'shift', 'Lock'],
  // evdev scancode 0x2e xkb keycode 54 xkb keyname AB03  level 2 keysym 0x43
  ['C', 0x2e, 'shift'],
  // evdev scancode 0x2e xkb keycode 54 xkb keyname AB03  level 2 keysym 0x43
  //['C', 0x2e, 'Lock'],
  // evdev scancode 0x2e xkb keycode 54 xkb keyname AB03  level 3 keysym 0x1e6
  ['cacute', 0x2e, 'altgr'],
  // evdev scancode 0x2e xkb keycode 54 xkb keyname AB03  level 3 keysym 0x1e6
  //['cacute', 0x2e, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x2e xkb keycode 54 xkb keyname AB03  level 4 keysym 0x1c6
  ['Cacute', 0x2e, 'shift', 'altgr'],
  // evdev scancode 0x2e xkb keycode 54 xkb keyname AB03  level 4 keysym 0x1c6
  //['Cacute', 0x2e, 'Lock', 'altgr'],
  // evdev scancode 0x2f xkb keycode 55 xkb keyname AB04  level 1 keysym 0x76
  ['v', 0x2f],
  // evdev scancode 0x2f xkb keycode 55 xkb keyname AB04  level 1 keysym 0x76
  //['v', 0x2f, 'shift', 'Lock'],
  // evdev scancode 0x2f xkb keycode 55 xkb keyname AB04  level 2 keysym 0x56
  ['V', 0x2f, 'shift'],
  // evdev scancode 0x2f xkb keycode 55 xkb keyname AB04  level 2 keysym 0x56
  //['V', 0x2f, 'Lock'],
  // evdev scancode 0x2f xkb keycode 55 xkb keyname AB04  level 3 keysym 0xafe
  ['doublelowquotemark', 0x2f, 'altgr'],
  // evdev scancode 0x2f xkb keycode 55 xkb keyname AB04  level 3 keysym 0xafe
  //['doublelowquotemark', 0x2f, 'Lock', 'altgr'],
  // evdev scancode 0x2f xkb keycode 55 xkb keyname AB04  level 4 keysym 0xad0
  ['leftsinglequotemark', 0x2f, 'shift', 'altgr'],
  // evdev scancode 0x2f xkb keycode 55 xkb keyname AB04  level 4 keysym 0xad0
  //['leftsinglequotemark', 0x2f, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x30 xkb keycode 56 xkb keyname AB05  level 1 keysym 0x62
  ['b', 0x30],
  // evdev scancode 0x30 xkb keycode 56 xkb keyname AB05  level 1 keysym 0x62
  //['b', 0x30, 'shift', 'Lock'],
  // evdev scancode 0x30 xkb keycode 56 xkb keyname AB05  level 2 keysym 0x42
  ['B', 0x30, 'shift'],
  // evdev scancode 0x30 xkb keycode 56 xkb keyname AB05  level 2 keysym 0x42
  //['B', 0x30, 'Lock'],
  // evdev scancode 0x30 xkb keycode 56 xkb keyname AB05  level 3 keysym 0xad3
  ['rightdoublequotemark', 0x30, 'altgr'],
  // evdev scancode 0x30 xkb keycode 56 xkb keyname AB05  level 3 keysym 0xad3
  //['rightdoublequotemark', 0x30, 'Lock', 'altgr'],
  // evdev scancode 0x30 xkb keycode 56 xkb keyname AB05  level 4 keysym 0xad2
  ['leftdoublequotemark', 0x30, 'shift', 'altgr'],
  // evdev scancode 0x30 xkb keycode 56 xkb keyname AB05  level 4 keysym 0xad2
  //['leftdoublequotemark', 0x30, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x31 xkb keycode 57 xkb keyname AB06  level 1 keysym 0x6e
  ['n', 0x31],
  // evdev scancode 0x31 xkb keycode 57 xkb keyname AB06  level 1 keysym 0x6e
  //['n', 0x31, 'shift', 'Lock'],
  // evdev scancode 0x31 xkb keycode 57 xkb keyname AB06  level 2 keysym 0x4e
  ['N', 0x31, 'shift'],
  // evdev scancode 0x31 xkb keycode 57 xkb keyname AB06  level 2 keysym 0x4e
  //['N', 0x31, 'Lock'],
  // evdev scancode 0x31 xkb keycode 57 xkb keyname AB06  level 3 keysym 0x1f1
  ['nacute', 0x31, 'altgr'],
  // evdev scancode 0x31 xkb keycode 57 xkb keyname AB06  level 3 keysym 0x1f1
  //['nacute', 0x31, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x31 xkb keycode 57 xkb keyname AB06  level 4 keysym 0x1d1
  ['Nacute', 0x31, 'shift', 'altgr'],
  // evdev scancode 0x31 xkb keycode 57 xkb keyname AB06  level 4 keysym 0x1d1
  //['Nacute', 0x31, 'Lock', 'altgr'],
  // evdev scancode 0x32 xkb keycode 58 xkb keyname AB07  level 1 keysym 0x6d
  ['m', 0x32],
  // evdev scancode 0x32 xkb keycode 58 xkb keyname AB07  level 1 keysym 0x6d
  //['m', 0x32, 'shift', 'Lock'],
  // evdev scancode 0x32 xkb keycode 58 xkb keyname AB07  level 2 keysym 0x4d
  ['M', 0x32, 'shift'],
  // evdev scancode 0x32 xkb keycode 58 xkb keyname AB07  level 2 keysym 0x4d
  //['M', 0x32, 'Lock'],
  // evdev scancode 0x32 xkb keycode 58 xkb keyname AB07  level 3 keysym 0xb5
  ['mu', 0x32, 'altgr'],
  // evdev scancode 0x32 xkb keycode 58 xkb keyname AB07  level 3 keysym 0xb5
  //['mu', 0x32, 'Lock', 'altgr'],
  // evdev scancode 0x32 xkb keycode 58 xkb keyname AB07  level 4 keysym 0x8c2
  ['infinity', 0x32, 'shift', 'altgr'],
  // evdev scancode 0x32 xkb keycode 58 xkb keyname AB07  level 4 keysym 0x8c2
  //['infinity', 0x32, 'shift', 'Lock', 'altgr'],
  // evdev scancode 0x33 xkb keycode 59 xkb keyname AB08  level 1 keysym 0x2c
  ['comma', 0x33],
  // evdev scancode 0x33 xkb keycode 59 xkb keyname AB08  level 2 keysym 0x3c
  ['less', 0x33, 'shift'],
  // evdev scancode 0x33 xkb keycode 59 xkb keyname AB08  level 3 keysym 0x8bc
  ['lessthanequal', 0x33, 'altgr'],
  // evdev scancode 0x33 xkb keycode 59 xkb keyname AB08  level 4 keysym 0xd7
  ['multiply', 0x33, 'shift', 'altgr'],
  // evdev scancode 0x34 xkb keycode 60 xkb keyname AB09  level 1 keysym 0x2e
  ['period', 0x34],
  // evdev scancode 0x34 xkb keycode 60 xkb keyname AB09  level 2 keysym 0x3e
  ['greater', 0x34, 'shift'],
  // evdev scancode 0x34 xkb keycode 60 xkb keyname AB09  level 3 keysym 0x8be
  ['greaterthanequal', 0x34, 'altgr'],
  // evdev scancode 0x34 xkb keycode 60 xkb keyname AB09  level 4 keysym 0xf7
  ['division', 0x34, 'shift', 'altgr'],
  // evdev scancode 0x35 xkb keycode 61 xkb keyname AB10  level 1 keysym 0x2f
  ['slash', 0x35],
  // evdev scancode 0x35 xkb keycode 61 xkb keyname AB10  level 2 keysym 0x3f
  ['question', 0x35, 'shift'],
  // evdev scancode 0x35 xkb keycode 61 xkb keyname AB10  level 3 keysym 0xfe60
  ['dead_belowdot', 0x35, 'altgr'],
  // evdev scancode 0x35 xkb keycode 61 xkb keyname AB10  level 4 keysym 0xfe56
  ['dead_abovedot', 0x35, 'shift', 'altgr'],
  // evdev scancode 0x36 xkb keycode 62 xkb keyname RTSH  level 1 keysym 0xffe2
  ['shift_R', 0x36],
  // evdev scancode 0x37 xkb keycode 63 xkb keyname KPMU  level 1 keysym 0xffaa
  ['KP_Multiply', 0x37],
  // evdev scancode 0x37 xkb keycode 63 xkb keyname KPMU  level 2 keysym 0xffaa
  ['KP_Multiply', 0x37, 'shift'],
  // evdev scancode 0x37 xkb keycode 63 xkb keyname KPMU  level 3 keysym 0xffaa
  ['KP_Multiply', 0x37, 'altgr'],
  // evdev scancode 0x37 xkb keycode 63 xkb keyname KPMU  level 4 keysym 0xffaa
  ['KP_Multiply', 0x37, 'shift', 'altgr'],
  // evdev scancode 0x37 xkb keycode 63 xkb keyname KPMU  level 5 keysym 0x1008fe21
  ['XF86ClearGrab', 0x37, 'control', 'alt'],
  // evdev scancode 0x38 xkb keycode 64 xkb keyname LALT  level 1 keysym 0xffe9
  ['Alt_L', 0x38],
  // evdev scancode 0x38 xkb keycode 64 xkb keyname LALT  level 2 keysym 0xffe7
  ['Meta_L', 0x38, 'shift'],
  // evdev scancode 0x39 xkb keycode 65 xkb keyname SPCE  level 1 keysym 0x20
  ['space', 0x39],
  // evdev scancode 0x39 xkb keycode 65 xkb keyname SPCE  level 2 keysym 0x20
  ['space', 0x39, 'shift'],
  // evdev scancode 0x39 xkb keycode 65 xkb keyname SPCE  level 3 keysym 0xa0
  ['nobreakspace', 0x39, 'altgr'],
  // evdev scancode 0x39 xkb keycode 65 xkb keyname SPCE  level 4 keysym 0xa0
  ['nobreakspace', 0x39, 'shift', 'altgr'],
  // evdev scancode 0x3a xkb keycode 66 xkb keyname CAPS  level 1 keysym 0xffe5
  //['Caps_Lock', 0x3a],
  // evdev scancode 0x3b xkb keycode 67 xkb keyname FK01  level 1 keysym 0xffbe
  ['F1', 0x3b],
  // evdev scancode 0x3b xkb keycode 67 xkb keyname FK01  level 2 keysym 0xffbe
  ['F1', 0x3b, 'shift'],
  // evdev scancode 0x3b xkb keycode 67 xkb keyname FK01  level 3 keysym 0xffbe
  ['F1', 0x3b, 'altgr'],
  // evdev scancode 0x3b xkb keycode 67 xkb keyname FK01  level 4 keysym 0xffbe
  ['F1', 0x3b, 'shift', 'altgr'],
  // evdev scancode 0x3b xkb keycode 67 xkb keyname FK01  level 5 keysym 0x1008fe01
  ['XF86Switch_VT_1', 0x3b, 'control', 'alt'],
  // evdev scancode 0x3c xkb keycode 68 xkb keyname FK02  level 1 keysym 0xffbf
  ['F2', 0x3c],
  // evdev scancode 0x3c xkb keycode 68 xkb keyname FK02  level 2 keysym 0xffbf
  ['F2', 0x3c, 'shift'],
  // evdev scancode 0x3c xkb keycode 68 xkb keyname FK02  level 3 keysym 0xffbf
  ['F2', 0x3c, 'altgr'],
  // evdev scancode 0x3c xkb keycode 68 xkb keyname FK02  level 4 keysym 0xffbf
  ['F2', 0x3c, 'shift', 'altgr'],
  // evdev scancode 0x3c xkb keycode 68 xkb keyname FK02  level 5 keysym 0x1008fe02
  ['XF86Switch_VT_2', 0x3c, 'control', 'alt'],
  // evdev scancode 0x3d xkb keycode 69 xkb keyname FK03  level 1 keysym 0xffc0
  ['F3', 0x3d],
  // evdev scancode 0x3d xkb keycode 69 xkb keyname FK03  level 2 keysym 0xffc0
  ['F3', 0x3d, 'shift'],
  // evdev scancode 0x3d xkb keycode 69 xkb keyname FK03  level 3 keysym 0xffc0
  ['F3', 0x3d, 'altgr'],
  // evdev scancode 0x3d xkb keycode 69 xkb keyname FK03  level 4 keysym 0xffc0
  ['F3', 0x3d, 'shift', 'altgr'],
  // evdev scancode 0x3d xkb keycode 69 xkb keyname FK03  level 5 keysym 0x1008fe03
  ['XF86Switch_VT_3', 0x3d, 'control', 'alt'],
  // evdev scancode 0x3e xkb keycode 70 xkb keyname FK04  level 1 keysym 0xffc1
  ['F4', 0x3e],
  // evdev scancode 0x3e xkb keycode 70 xkb keyname FK04  level 2 keysym 0xffc1
  ['F4', 0x3e, 'shift'],
  // evdev scancode 0x3e xkb keycode 70 xkb keyname FK04  level 3 keysym 0xffc1
  ['F4', 0x3e, 'altgr'],
  // evdev scancode 0x3e xkb keycode 70 xkb keyname FK04  level 4 keysym 0xffc1
  ['F4', 0x3e, 'shift', 'altgr'],
  // evdev scancode 0x3e xkb keycode 70 xkb keyname FK04  level 5 keysym 0x1008fe04
  ['XF86Switch_VT_4', 0x3e, 'control', 'alt'],
  // evdev scancode 0x3f xkb keycode 71 xkb keyname FK05  level 1 keysym 0xffc2
  ['F5', 0x3f],
  // evdev scancode 0x3f xkb keycode 71 xkb keyname FK05  level 2 keysym 0xffc2
  ['F5', 0x3f, 'shift'],
  // evdev scancode 0x3f xkb keycode 71 xkb keyname FK05  level 3 keysym 0xffc2
  ['F5', 0x3f, 'altgr'],
  // evdev scancode 0x3f xkb keycode 71 xkb keyname FK05  level 4 keysym 0xffc2
  ['F5', 0x3f, 'shift', 'altgr'],
  // evdev scancode 0x3f xkb keycode 71 xkb keyname FK05  level 5 keysym 0x1008fe05
  ['XF86Switch_VT_5', 0x3f, 'control', 'alt'],
  // evdev scancode 0x40 xkb keycode 72 xkb keyname FK06  level 1 keysym 0xffc3
  ['F6', 0x40],
  // evdev scancode 0x40 xkb keycode 72 xkb keyname FK06  level 2 keysym 0xffc3
  ['F6', 0x40, 'shift'],
  // evdev scancode 0x40 xkb keycode 72 xkb keyname FK06  level 3 keysym 0xffc3
  ['F6', 0x40, 'altgr'],
  // evdev scancode 0x40 xkb keycode 72 xkb keyname FK06  level 4 keysym 0xffc3
  ['F6', 0x40, 'shift', 'altgr'],
  // evdev scancode 0x40 xkb keycode 72 xkb keyname FK06  level 5 keysym 0x1008fe06
  ['XF86Switch_VT_6', 0x40, 'control', 'alt'],
  // evdev scancode 0x41 xkb keycode 73 xkb keyname FK07  level 1 keysym 0xffc4
  ['F7', 0x41],
  // evdev scancode 0x41 xkb keycode 73 xkb keyname FK07  level 2 keysym 0xffc4
  ['F7', 0x41, 'shift'],
  // evdev scancode 0x41 xkb keycode 73 xkb keyname FK07  level 3 keysym 0xffc4
  ['F7', 0x41, 'altgr'],
  // evdev scancode 0x41 xkb keycode 73 xkb keyname FK07  level 4 keysym 0xffc4
  ['F7', 0x41, 'shift', 'altgr'],
  // evdev scancode 0x41 xkb keycode 73 xkb keyname FK07  level 5 keysym 0x1008fe07
  ['XF86Switch_VT_7', 0x41, 'control', 'alt'],
  // evdev scancode 0x42 xkb keycode 74 xkb keyname FK08  level 1 keysym 0xffc5
  ['F8', 0x42],
  // evdev scancode 0x42 xkb keycode 74 xkb keyname FK08  level 2 keysym 0xffc5
  ['F8', 0x42, 'shift'],
  // evdev scancode 0x42 xkb keycode 74 xkb keyname FK08  level 3 keysym 0xffc5
  ['F8', 0x42, 'altgr'],
  // evdev scancode 0x42 xkb keycode 74 xkb keyname FK08  level 4 keysym 0xffc5
  ['F8', 0x42, 'shift', 'altgr'],
  // evdev scancode 0x42 xkb keycode 74 xkb keyname FK08  level 5 keysym 0x1008fe08
  ['XF86Switch_VT_8', 0x42, 'control', 'alt'],
  // evdev scancode 0x43 xkb keycode 75 xkb keyname FK09  level 1 keysym 0xffc6
  ['F9', 0x43],
  // evdev scancode 0x43 xkb keycode 75 xkb keyname FK09  level 2 keysym 0xffc6
  ['F9', 0x43, 'shift'],
  // evdev scancode 0x43 xkb keycode 75 xkb keyname FK09  level 3 keysym 0xffc6
  ['F9', 0x43, 'altgr'],
  // evdev scancode 0x43 xkb keycode 75 xkb keyname FK09  level 4 keysym 0xffc6
  ['F9', 0x43, 'shift', 'altgr'],
  // evdev scancode 0x43 xkb keycode 75 xkb keyname FK09  level 5 keysym 0x1008fe09
  ['XF86Switch_VT_9', 0x43, 'control', 'alt'],
  // evdev scancode 0x44 xkb keycode 76 xkb keyname FK10  level 1 keysym 0xffc7
  ['F10', 0x44],
  // evdev scancode 0x44 xkb keycode 76 xkb keyname FK10  level 2 keysym 0xffc7
  ['F10', 0x44, 'shift'],
  // evdev scancode 0x44 xkb keycode 76 xkb keyname FK10  level 3 keysym 0xffc7
  ['F10', 0x44, 'altgr'],
  // evdev scancode 0x44 xkb keycode 76 xkb keyname FK10  level 4 keysym 0xffc7
  ['F10', 0x44, 'shift', 'altgr'],
  // evdev scancode 0x44 xkb keycode 76 xkb keyname FK10  level 5 keysym 0x1008fe0a
  ['XF86Switch_VT_10', 0x44, 'control', 'alt'],
  // evdev scancode 0x45 xkb keycode 77 xkb keyname NMLK  level 1 keysym 0xff7f
  //['Num_Lock', 0x45],
  // evdev scancode 0x46 xkb keycode 78 xkb keyname SCLK  level 1 keysym 0xff14
  //['Scroll_Lock', 0x46],
  // evdev scancode 0x47 xkb keycode 79 xkb keyname KP7  level 1 keysym 0xff95
  ['KP_Home', 0x47],
  // evdev scancode 0x47 xkb keycode 79 xkb keyname KP7  level 1 keysym 0xff95
  // ['KP_Home', 0x47, 'shift', 'Mod2'],
  // evdev scancode 0x47 xkb keycode 79 xkb keyname KP7  level 2 keysym 0xffb7
  // ['KP_7', 0x47, 'Mod2'],
  // evdev scancode 0x48 xkb keycode 80 xkb keyname KP8  level 1 keysym 0xff97
  ['KP_Up', 0x48],
  // evdev scancode 0x48 xkb keycode 80 xkb keyname KP8  level 1 keysym 0xff97
  // ['KP_Up', 0x48, 'shift', 'Mod2'],
  // evdev scancode 0x48 xkb keycode 80 xkb keyname KP8  level 2 keysym 0xffb8
  // ['KP_8', 0x48, 'Mod2'],
  // evdev scancode 0x49 xkb keycode 81 xkb keyname KP9  level 1 keysym 0xff9a
  ['KP_Prior', 0x49],
  // evdev scancode 0x49 xkb keycode 81 xkb keyname KP9  level 1 keysym 0xff9a
  // ['KP_Prior', 0x49, 'shift', 'Mod2'],
  // evdev scancode 0x49 xkb keycode 81 xkb keyname KP9  level 2 keysym 0xffb9
  // ['KP_9', 0x49, 'Mod2'],
  // evdev scancode 0x4a xkb keycode 82 xkb keyname KPSU  level 1 keysym 0xffad
  ['KP_Subtract', 0x4a],
  // evdev scancode 0x4a xkb keycode 82 xkb keyname KPSU  level 2 keysym 0xffad
  ['KP_Subtract', 0x4a, 'shift'],
  // evdev scancode 0x4a xkb keycode 82 xkb keyname KPSU  level 3 keysym 0xffad
  ['KP_Subtract', 0x4a, 'altgr'],
  // evdev scancode 0x4a xkb keycode 82 xkb keyname KPSU  level 4 keysym 0xffad
  ['KP_Subtract', 0x4a, 'shift', 'altgr'],
  // evdev scancode 0x4a xkb keycode 82 xkb keyname KPSU  level 5 keysym 0x1008fe23
  ['XF86Prev_VMode', 0x4a, 'control', 'alt'],
  // evdev scancode 0x4b xkb keycode 83 xkb keyname KP4  level 1 keysym 0xff96
  ['KP_Left', 0x4b],
  // evdev scancode 0x4b xkb keycode 83 xkb keyname KP4  level 1 keysym 0xff96
  // ['KP_Left', 0x4b, 'shift', 'Mod2'],
  // evdev scancode 0x4b xkb keycode 83 xkb keyname KP4  level 2 keysym 0xffb4
  // ['KP_4', 0x4b, 'Mod2'],
  // evdev scancode 0x4c xkb keycode 84 xkb keyname KP5  level 1 keysym 0xff9d
  ['KP_Begin', 0x4c],
  // evdev scancode 0x4c xkb keycode 84 xkb keyname KP5  level 1 keysym 0xff9d
  // ['KP_Begin', 0x4c, 'shift', 'Mod2'],
  // evdev scancode 0x4c xkb keycode 84 xkb keyname KP5  level 2 keysym 0xffb5
  // ['KP_5', 0x4c, 'Mod2'],
  // evdev scancode 0x4d xkb keycode 85 xkb keyname KP6  level 1 keysym 0xff98
  ['KP_Right', 0x4d],
  // evdev scancode 0x4d xkb keycode 85 xkb keyname KP6  level 1 keysym 0xff98
  // ['KP_Right', 0x4d, 'shift', 'Mod2'],
  // evdev scancode 0x4d xkb keycode 85 xkb keyname KP6  level 2 keysym 0xffb6
  // ['KP_6', 0x4d, 'Mod2'],
  // evdev scancode 0x4e xkb keycode 86 xkb keyname KPAD  level 1 keysym 0xffab
  ['KP_Add', 0x4e],
  // evdev scancode 0x4e xkb keycode 86 xkb keyname KPAD  level 2 keysym 0xffab
  ['KP_Add', 0x4e, 'shift'],
  // evdev scancode 0x4e xkb keycode 86 xkb keyname KPAD  level 3 keysym 0xffab
  ['KP_Add', 0x4e, 'altgr'],
  // evdev scancode 0x4e xkb keycode 86 xkb keyname KPAD  level 4 keysym 0xffab
  ['KP_Add', 0x4e, 'shift', 'altgr'],
  // evdev scancode 0x4e xkb keycode 86 xkb keyname KPAD  level 5 keysym 0x1008fe22
  ['XF86Next_VMode', 0x4e, 'control', 'alt'],
  // evdev scancode 0x4f xkb keycode 87 xkb keyname KP1  level 1 keysym 0xff9c
  ['KP_End', 0x4f],
  // evdev scancode 0x4f xkb keycode 87 xkb keyname KP1  level 1 keysym 0xff9c
  // ['KP_End', 0x4f, 'shift', 'Mod2'],
  // evdev scancode 0x4f xkb keycode 87 xkb keyname KP1  level 2 keysym 0xffb1
  // ['KP_1', 0x4f, 'Mod2'],
  // evdev scancode 0x50 xkb keycode 88 xkb keyname KP2  level 1 keysym 0xff99
  ['KP_Down', 0x50],
  // evdev scancode 0x50 xkb keycode 88 xkb keyname KP2  level 1 keysym 0xff99
  // ['KP_Down', 0x50, 'shift', 'Mod2'],
  // evdev scancode 0x50 xkb keycode 88 xkb keyname KP2  level 2 keysym 0xffb2
  // ['KP_2', 0x50, 'Mod2'],
  // evdev scancode 0x51 xkb keycode 89 xkb keyname KP3  level 1 keysym 0xff9b
  ['KP_Next', 0x51],
  // evdev scancode 0x51 xkb keycode 89 xkb keyname KP3  level 1 keysym 0xff9b
  // ['KP_Next', 0x51, 'shift', 'Mod2'],
  // evdev scancode 0x51 xkb keycode 89 xkb keyname KP3  level 2 keysym 0xffb3
  // ['KP_3', 0x51, 'Mod2'],
  // evdev scancode 0x52 xkb keycode 90 xkb keyname KP0  level 1 keysym 0xff9e
  ['KP_Insert', 0x52],
  // evdev scancode 0x52 xkb keycode 90 xkb keyname KP0  level 1 keysym 0xff9e
  // ['KP_Insert', 0x52, 'shift', 'Mod2'],
  // evdev scancode 0x52 xkb keycode 90 xkb keyname KP0  level 2 keysym 0xffb0
  // ['KP_0', 0x52, 'Mod2'],
  // evdev scancode 0x53 xkb keycode 91 xkb keyname KPDL  level 1 keysym 0xff9f
  ['KP_Delete', 0x53],
  // evdev scancode 0x53 xkb keycode 91 xkb keyname KPDL  level 1 keysym 0xff9f
  // ['KP_Delete', 0x53, 'shift', 'Mod2'],
  // evdev scancode 0x53 xkb keycode 91 xkb keyname KPDL  level 2 keysym 0xffac
  // ['KP_Separator', 0x53, 'Mod2'],
  // evdev scancode 0x54 xkb keycode 92 xkb keyname LVL3  level 1 keysym 0xfe03
  ['ISO_Level3_shift', 0x54],
  // evdev scancode 0x56 xkb keycode 94 xkb keyname LSGT  level 1 keysym 0x3c
  ['less', 0x56],
  // evdev scancode 0x56 xkb keycode 94 xkb keyname LSGT  level 2 keysym 0x3e
  ['greater', 0x56, 'shift'],
  // evdev scancode 0x56 xkb keycode 94 xkb keyname LSGT  level 3 keysym 0x7c
  ['bar', 0x56, 'altgr'],
  // evdev scancode 0x56 xkb keycode 94 xkb keyname LSGT  level 4 keysym 0xa6
  ['brokenbar', 0x56, 'shift', 'altgr'],
  // evdev scancode 0x57 xkb keycode 95 xkb keyname FK11  level 1 keysym 0xffc8
  ['F11', 0x57],
  // evdev scancode 0x57 xkb keycode 95 xkb keyname FK11  level 2 keysym 0xffc8
  ['F11', 0x57, 'shift'],
  // evdev scancode 0x57 xkb keycode 95 xkb keyname FK11  level 3 keysym 0xffc8
  ['F11', 0x57, 'altgr'],
  // evdev scancode 0x57 xkb keycode 95 xkb keyname FK11  level 4 keysym 0xffc8
  ['F11', 0x57, 'shift', 'altgr'],
  // evdev scancode 0x57 xkb keycode 95 xkb keyname FK11  level 5 keysym 0x1008fe0b
  ['XF86Switch_VT_11', 0x57, 'control', 'alt'],
  // evdev scancode 0x58 xkb keycode 96 xkb keyname FK12  level 1 keysym 0xffc9
  ['F12', 0x58],
  // evdev scancode 0x58 xkb keycode 96 xkb keyname FK12  level 2 keysym 0xffc9
  ['F12', 0x58, 'shift'],
  // evdev scancode 0x58 xkb keycode 96 xkb keyname FK12  level 3 keysym 0xffc9
  ['F12', 0x58, 'altgr'],
  // evdev scancode 0x58 xkb keycode 96 xkb keyname FK12  level 4 keysym 0xffc9
  ['F12', 0x58, 'shift', 'altgr'],
  // evdev scancode 0x58 xkb keycode 96 xkb keyname FK12  level 5 keysym 0x1008fe0c
  ['XF86Switch_VT_12', 0x58, 'control', 'alt'],
  // evdev scancode 0x5a xkb keycode 98 xkb keyname KATA  level 1 keysym 0xff26
  ['Katakana', 0x5a],
  // evdev scancode 0x5b xkb keycode 99 xkb keyname HIRA  level 1 keysym 0xff25
  ['Hiragana', 0x5b],
  // evdev scancode 0x5c xkb keycode 100 xkb keyname HENK  level 1 keysym 0xff23
  ['Henkan_Mode', 0x5c],
  // evdev scancode 0x5d xkb keycode 101 xkb keyname HKTG  level 1 keysym 0xff27
  ['Hiragana_Katakana', 0x5d],
  // evdev scancode 0x5e xkb keycode 102 xkb keyname MUHE  level 1 keysym 0xff22
  ['Muhenkan', 0x5e],
  // evdev scancode 0x60 xkb keycode 104 xkb keyname KPEN  level 1 keysym 0xff8d
  ['KP_Enter', 0x60],
  // evdev scancode 0x61 xkb keycode 105 xkb keyname RCTL  level 1 keysym 0xffe4
  ['control_R', 0x61],
  // evdev scancode 0x62 xkb keycode 106 xkb keyname KPDV  level 1 keysym 0xffaf
  ['KP_Divide', 0x62],
  // evdev scancode 0x62 xkb keycode 106 xkb keyname KPDV  level 2 keysym 0xffaf
  ['KP_Divide', 0x62, 'shift'],
  // evdev scancode 0x62 xkb keycode 106 xkb keyname KPDV  level 3 keysym 0xffaf
  ['KP_Divide', 0x62, 'altgr'],
  // evdev scancode 0x62 xkb keycode 106 xkb keyname KPDV  level 4 keysym 0xffaf
  ['KP_Divide', 0x62, 'shift', 'altgr'],
  // evdev scancode 0x62 xkb keycode 106 xkb keyname KPDV  level 5 keysym 0x1008fe20
  ['XF86Ungrab', 0x62, 'control', 'alt'],
  // evdev scancode 0x63 xkb keycode 107 xkb keyname PRSC  level 1 keysym 0xff61
  ['Print', 0x63],
  // evdev scancode 0x63 xkb keycode 107 xkb keyname PRSC  level 2 keysym 0xff15
  ['Sys_Req', 0x63, 'alt'],
  // evdev scancode 0x64 xkb keycode 108 xkb keyname RALT  level 1 keysym 0xfe03
  ['ISO_Level3_shift', 0x64],
  // evdev scancode 0x65 xkb keycode 109 xkb keyname LNFD  level 1 keysym 0xff0a
  ['Linefeed', 0x65],
  // evdev scancode 0x66 xkb keycode 110 xkb keyname HOME  level 1 keysym 0xff50
  ['Home', 0x66],
  // evdev scancode 0x67 xkb keycode 111 xkb keyname UP  level 1 keysym 0xff52
  ['Up', 0x67],
  // evdev scancode 0x68 xkb keycode 112 xkb keyname PGUP  level 1 keysym 0xff55
  ['Prior', 0x68],
  // evdev scancode 0x69 xkb keycode 113 xkb keyname LEFT  level 1 keysym 0xff51
  ['Left', 0x69],
  // evdev scancode 0x6a xkb keycode 114 xkb keyname RGHT  level 1 keysym 0xff53
  ['Right', 0x6a],
  // evdev scancode 0x6b xkb keycode 115 xkb keyname END  level 1 keysym 0xff57
  ['End', 0x6b],
  // evdev scancode 0x6c xkb keycode 116 xkb keyname DOWN  level 1 keysym 0xff54
  ['Down', 0x6c],
  // evdev scancode 0x6d xkb keycode 117 xkb keyname PGDN  level 1 keysym 0xff56
  ['Next', 0x6d],
  // evdev scancode 0x6e xkb keycode 118 xkb keyname INS  level 1 keysym 0xff63
  ['Insert', 0x6e],
  // evdev scancode 0x6f xkb keycode 119 xkb keyname DELE  level 1 keysym 0xffff
  ['Delete', 0x6f],
  // evdev scancode 0x71 xkb keycode 121 xkb keyname MUTE  level 1 keysym 0x1008ff12
  ['XF86AudioMute', 0x71],
  // evdev scancode 0x72 xkb keycode 122 xkb keyname VOL-  level 1 keysym 0x1008ff11
  ['XF86AudioLowerVolume', 0x72],
  // evdev scancode 0x73 xkb keycode 123 xkb keyname VOL+  level 1 keysym 0x1008ff13
  ['XF86AudioRaiseVolume', 0x73],
  // evdev scancode 0x74 xkb keycode 124 xkb keyname POWR  level 1 keysym 0x1008ff2a
  ['XF86PowerOff', 0x74],
  // evdev scancode 0x75 xkb keycode 125 xkb keyname KPEQ  level 1 keysym 0xffbd
  ['KP_Equal', 0x75],
  // evdev scancode 0x76 xkb keycode 126 xkb keyname I126  level 1 keysym 0xb1
  ['plusminus', 0x76],
  // evdev scancode 0x77 xkb keycode 127 xkb keyname PAUS  level 1 keysym 0xff13
  ['Pause', 0x77],
  // evdev scancode 0x77 xkb keycode 127 xkb keyname PAUS  level 2 keysym 0xff6b
  ['Break', 0x77, 'control'],
  // evdev scancode 0x78 xkb keycode 128 xkb keyname I128  level 1 keysym 0x1008ff4a
  ['XF86LaunchA', 0x78],
  // evdev scancode 0x79 xkb keycode 129 xkb keyname I129  level 1 keysym 0xffae
  ['KP_Decimal', 0x79],
  // evdev scancode 0x79 xkb keycode 129 xkb keyname I129  level 1 keysym 0xffae
  // ['KP_Decimal', 0x79, 'shift', 'Mod2'],
  // evdev scancode 0x79 xkb keycode 129 xkb keyname I129  level 2 keysym 0xffae
  // ['KP_Decimal', 0x79, 'Mod2'],
  // evdev scancode 0x7a xkb keycode 130 xkb keyname HNGL  level 1 keysym 0xff31
  ['Hangul', 0x7a],
  // evdev scancode 0x7b xkb keycode 131 xkb keyname HJCV  level 1 keysym 0xff34
  ['Hangul_Hanja', 0x7b],
  // evdev scancode 0x7d xkb keycode 133 xkb keyname LWIN  level 1 keysym 0xffeb
  ['Super_L', 0x7d],
  // evdev scancode 0x7e xkb keycode 134 xkb keyname RWIN  level 1 keysym 0xffec
  ['Super_R', 0x7e],
  // evdev scancode 0x7f xkb keycode 135 xkb keyname COMP  level 1 keysym 0xff67
  ['Menu', 0x7f],
  // evdev scancode 0x80 xkb keycode 136 xkb keyname STOP  level 1 keysym 0xff69
  ['Cancel', 0x80],
  // evdev scancode 0x81 xkb keycode 137 xkb keyname AGAI  level 1 keysym 0xff66
  ['Redo', 0x81],
  // evdev scancode 0x82 xkb keycode 138 xkb keyname PROP  level 1 keysym 0x1005ff70
  ['SunProps', 0x82],
  // evdev scancode 0x83 xkb keycode 139 xkb keyname UNDO  level 1 keysym 0xff65
  ['Undo', 0x83],
  // evdev scancode 0x84 xkb keycode 140 xkb keyname FRNT  level 1 keysym 0x1005ff71
  ['SunFront', 0x84],
  // evdev scancode 0x85 xkb keycode 141 xkb keyname COPY  level 1 keysym 0x1008ff57
  ['XF86Copy', 0x85],
  // evdev scancode 0x86 xkb keycode 142 xkb keyname OPEN  level 1 keysym 0x1008ff6b
  ['XF86Open', 0x86],
  // evdev scancode 0x87 xkb keycode 143 xkb keyname PAST  level 1 keysym 0x1008ff6d
  ['XF86Paste', 0x87],
  // evdev scancode 0x88 xkb keycode 144 xkb keyname FIND  level 1 keysym 0xff68
  ['Find', 0x88],
  // evdev scancode 0x89 xkb keycode 145 xkb keyname CUT  level 1 keysym 0x1008ff58
  ['XF86Cut', 0x89],
  // evdev scancode 0x8a xkb keycode 146 xkb keyname HELP  level 1 keysym 0xff6a
  ['Help', 0x8a],
  // evdev scancode 0x8b xkb keycode 147 xkb keyname I147  level 1 keysym 0x1008ff65
  ['XF86MenuKB', 0x8b],
  // evdev scancode 0x8c xkb keycode 148 xkb keyname I148  level 1 keysym 0x1008ff1d
  ['XF86Calculator', 0x8c],
  // evdev scancode 0x8e xkb keycode 150 xkb keyname I150  level 1 keysym 0x1008ff2f
  ['XF86Sleep', 0x8e],
  // evdev scancode 0x8f xkb keycode 151 xkb keyname I151  level 1 keysym 0x1008ff2b
  ['XF86WakeUp', 0x8f],
  // evdev scancode 0x90 xkb keycode 152 xkb keyname I152  level 1 keysym 0x1008ff5d
  ['XF86Explorer', 0x90],
  // evdev scancode 0x91 xkb keycode 153 xkb keyname I153  level 1 keysym 0x1008ff7b
  ['XF86Send', 0x91],
  // evdev scancode 0x93 xkb keycode 155 xkb keyname I155  level 1 keysym 0x1008ff8a
  ['XF86Xfer', 0x93],
  // evdev scancode 0x94 xkb keycode 156 xkb keyname I156  level 1 keysym 0x1008ff41
  ['XF86Launch1', 0x94],
  // evdev scancode 0x95 xkb keycode 157 xkb keyname I157  level 1 keysym 0x1008ff42
  ['XF86Launch2', 0x95],
  // evdev scancode 0x96 xkb keycode 158 xkb keyname I158  level 1 keysym 0x1008ff2e
  ['XF86WWW', 0x96],
  // evdev scancode 0x97 xkb keycode 159 xkb keyname I159  level 1 keysym 0x1008ff5a
  ['XF86DOS', 0x97],
  // evdev scancode 0x98 xkb keycode 160 xkb keyname I160  level 1 keysym 0x1008ff2d
  ['XF86ScreenSaver', 0x98],
  // evdev scancode 0x99 xkb keycode 161 xkb keyname I161  level 1 keysym 0x1008ff74
  ['XF86RotateWindows', 0x99],
  // evdev scancode 0x9a xkb keycode 162 xkb keyname I162  level 1 keysym 0x1008ff7f
  ['XF86TaskPane', 0x9a],
  // evdev scancode 0x9b xkb keycode 163 xkb keyname I163  level 1 keysym 0x1008ff19
  ['XF86Mail', 0x9b],
  // evdev scancode 0x9c xkb keycode 164 xkb keyname I164  level 1 keysym 0x1008ff30
  ['XF86Favorites', 0x9c],
  // evdev scancode 0x9d xkb keycode 165 xkb keyname I165  level 1 keysym 0x1008ff33
  ['XF86MyComputer', 0x9d],
  // evdev scancode 0x9e xkb keycode 166 xkb keyname I166  level 1 keysym 0x1008ff26
  ['XF86Back', 0x9e],
  // evdev scancode 0x9f xkb keycode 167 xkb keyname I167  level 1 keysym 0x1008ff27
  ['XF86Forward', 0x9f],
  // evdev scancode 0xa1 xkb keycode 169 xkb keyname I169  level 1 keysym 0x1008ff2c
  ['XF86Eject', 0xa1],
  // evdev scancode 0xa2 xkb keycode 170 xkb keyname I170  level 1 keysym 0x1008ff2c
  ['XF86Eject', 0xa2],
  // evdev scancode 0xa3 xkb keycode 171 xkb keyname I171  level 1 keysym 0x1008ff17
  ['XF86AudioNext', 0xa3],
  // evdev scancode 0xa4 xkb keycode 172 xkb keyname I172  level 1 keysym 0x1008ff14
  ['XF86AudioPlay', 0xa4],
  // evdev scancode 0xa4 xkb keycode 172 xkb keyname I172  level 2 keysym 0x1008ff31
  ['XF86AudioPause', 0xa4, 'shift'],
  // evdev scancode 0xa5 xkb keycode 173 xkb keyname I173  level 1 keysym 0x1008ff16
  ['XF86AudioPrev', 0xa5],
  // evdev scancode 0xa6 xkb keycode 174 xkb keyname I174  level 1 keysym 0x1008ff15
  ['XF86AudioStop', 0xa6],
  // evdev scancode 0xa6 xkb keycode 174 xkb keyname I174  level 2 keysym 0x1008ff2c
  ['XF86Eject', 0xa6, 'shift'],
  // evdev scancode 0xa7 xkb keycode 175 xkb keyname I175  level 1 keysym 0x1008ff1c
  ['XF86AudioRecord', 0xa7],
  // evdev scancode 0xa8 xkb keycode 176 xkb keyname I176  level 1 keysym 0x1008ff3e
  ['XF86AudioRewind', 0xa8],
  // evdev scancode 0xa9 xkb keycode 177 xkb keyname I177  level 1 keysym 0x1008ff6e
  ['XF86Phone', 0xa9],
  // evdev scancode 0xab xkb keycode 179 xkb keyname I179  level 1 keysym 0x1008ff81
  ['XF86Tools', 0xab],
  // evdev scancode 0xac xkb keycode 180 xkb keyname I180  level 1 keysym 0x1008ff18
  ['XF86HomePage', 0xac],
  // evdev scancode 0xad xkb keycode 181 xkb keyname I181  level 1 keysym 0x1008ff73
  ['XF86Reload', 0xad],
  // evdev scancode 0xae xkb keycode 182 xkb keyname I182  level 1 keysym 0x1008ff56
  ['XF86Close', 0xae],
  // evdev scancode 0xb1 xkb keycode 185 xkb keyname I185  level 1 keysym 0x1008ff78
  ['XF86ScrollUp', 0xb1],
  // evdev scancode 0xb2 xkb keycode 186 xkb keyname I186  level 1 keysym 0x1008ff79
  ['XF86ScrollDown', 0xb2],
  // evdev scancode 0xb3 xkb keycode 187 xkb keyname I187  level 1 keysym 0x28
  ['parenleft', 0xb3],
  // evdev scancode 0xb4 xkb keycode 188 xkb keyname I188  level 1 keysym 0x29
  ['parenright', 0xb4],
  // evdev scancode 0xb5 xkb keycode 189 xkb keyname I189  level 1 keysym 0x1008ff68
  ['XF86New', 0xb5],
  // evdev scancode 0xb6 xkb keycode 190 xkb keyname I190  level 1 keysym 0xff66
  ['Redo', 0xb6],
  // evdev scancode 0xb7 xkb keycode 191 xkb keyname FK13  level 1 keysym 0x1008ff81
  ['XF86Tools', 0xb7],
  // evdev scancode 0xb8 xkb keycode 192 xkb keyname FK14  level 1 keysym 0x1008ff45
  ['XF86Launch5', 0xb8],
  // evdev scancode 0xb9 xkb keycode 193 xkb keyname FK15  level 1 keysym 0x1008ff46
  ['XF86Launch6', 0xb9],
  // evdev scancode 0xba xkb keycode 194 xkb keyname FK16  level 1 keysym 0x1008ff47
  ['XF86Launch7', 0xba],
  // evdev scancode 0xbb xkb keycode 195 xkb keyname FK17  level 1 keysym 0x1008ff48
  ['XF86Launch8', 0xbb],
  // evdev scancode 0xbc xkb keycode 196 xkb keyname FK18  level 1 keysym 0x1008ff49
  ['XF86Launch9', 0xbc],
  // evdev scancode 0xbe xkb keycode 198 xkb keyname FK20  level 1 keysym 0x1008ffb2
  ['XF86AudioMicMute', 0xbe],
  // evdev scancode 0xbf xkb keycode 199 xkb keyname FK21  level 1 keysym 0x1008ffa9
  ['XF86TouchpadToggle', 0xbf],
  // evdev scancode 0xc0 xkb keycode 200 xkb keyname FK22  level 1 keysym 0x1008ffb0
  ['XF86TouchpadOn', 0xc0],
  // evdev scancode 0xc1 xkb keycode 201 xkb keyname FK23  level 1 keysym 0x1008ffb1
  ['XF86TouchpadOff', 0xc1],
  // evdev scancode 0xc3 xkb keycode 203 xkb keyname LVL5  level 1 keysym 0xfe11
  ['ISO_Level5_shift', 0xc3],
  // ERROR: Multiple keysym for keycode 204 and level 0
  // evdev scancode 0xc4 xkb keycode 204 xkb keyname ALT  level 2 keysym 0xffe9
  ['Alt_L', 0xc4, 'shift'],
  // ERROR: Multiple keysym for keycode 205 and level 0
  // evdev scancode 0xc5 xkb keycode 205 xkb keyname META  level 2 keysym 0xffe7
  ['Meta_L', 0xc5, 'shift'],
  // ERROR: Multiple keysym for keycode 206 and level 0
  // evdev scancode 0xc6 xkb keycode 206 xkb keyname SUPR  level 2 keysym 0xffeb
  ['Super_L', 0xc6, 'shift'],
  // ERROR: Multiple keysym for keycode 207 and level 0
  // evdev scancode 0xc7 xkb keycode 207 xkb keyname HYPR  level 2 keysym 0xffed
  ['Hyper_L', 0xc7, 'shift'],
  // evdev scancode 0xc8 xkb keycode 208 xkb keyname I208  level 1 keysym 0x1008ff14
  ['XF86AudioPlay', 0xc8],
  // evdev scancode 0xc9 xkb keycode 209 xkb keyname I209  level 1 keysym 0x1008ff31
  ['XF86AudioPause', 0xc9],
  // evdev scancode 0xca xkb keycode 210 xkb keyname I210  level 1 keysym 0x1008ff43
  ['XF86Launch3', 0xca],
  // evdev scancode 0xcb xkb keycode 211 xkb keyname I211  level 1 keysym 0x1008ff44
  ['XF86Launch4', 0xcb],
  // evdev scancode 0xcc xkb keycode 212 xkb keyname I212  level 1 keysym 0x1008ff4b
  ['XF86LaunchB', 0xcc],
  // evdev scancode 0xcd xkb keycode 213 xkb keyname I213  level 1 keysym 0x1008ffa7
  ['XF86Suspend', 0xcd],
  // evdev scancode 0xce xkb keycode 214 xkb keyname I214  level 1 keysym 0x1008ff56
  ['XF86Close', 0xce],
  // evdev scancode 0xcf xkb keycode 215 xkb keyname I215  level 1 keysym 0x1008ff14
  ['XF86AudioPlay', 0xcf],
  // evdev scancode 0xd0 xkb keycode 216 xkb keyname I216  level 1 keysym 0x1008ff97
  ['XF86AudioForward', 0xd0],
  // evdev scancode 0xd2 xkb keycode 218 xkb keyname I218  level 1 keysym 0xff61
  ['Print', 0xd2],
  // evdev scancode 0xd4 xkb keycode 220 xkb keyname I220  level 1 keysym 0x1008ff8f
  ['XF86WebCam', 0xd4],
  // evdev scancode 0xd5 xkb keycode 221 xkb keyname I221  level 1 keysym 0x1008ffb6
  ['XF86AudioPreset', 0xd5],
  // evdev scancode 0xd7 xkb keycode 223 xkb keyname I223  level 1 keysym 0x1008ff19
  ['XF86Mail', 0xd7],
  // evdev scancode 0xd8 xkb keycode 224 xkb keyname I224  level 1 keysym 0x1008ff8e
  ['XF86Messenger', 0xd8],
  // evdev scancode 0xd9 xkb keycode 225 xkb keyname I225  level 1 keysym 0x1008ff1b
  ['XF86Search', 0xd9],
  // evdev scancode 0xda xkb keycode 226 xkb keyname I226  level 1 keysym 0x1008ff5f
  ['XF86Go', 0xda],
  // evdev scancode 0xdb xkb keycode 227 xkb keyname I227  level 1 keysym 0x1008ff3c
  ['XF86Finance', 0xdb],
  // evdev scancode 0xdc xkb keycode 228 xkb keyname I228  level 1 keysym 0x1008ff5e
  ['XF86Game', 0xdc],
  // evdev scancode 0xdd xkb keycode 229 xkb keyname I229  level 1 keysym 0x1008ff36
  ['XF86Shop', 0xdd],
  // evdev scancode 0xdf xkb keycode 231 xkb keyname I231  level 1 keysym 0xff69
  ['Cancel', 0xdf],
  // evdev scancode 0xe0 xkb keycode 232 xkb keyname I232  level 1 keysym 0x1008ff03
  ['XF86MonBrightnessDown', 0xe0],
  // evdev scancode 0xe1 xkb keycode 233 xkb keyname I233  level 1 keysym 0x1008ff02
  ['XF86MonBrightnessUp', 0xe1],
  // evdev scancode 0xe2 xkb keycode 234 xkb keyname I234  level 1 keysym 0x1008ff32
  ['XF86AudioMedia', 0xe2],
  // evdev scancode 0xe3 xkb keycode 235 xkb keyname I235  level 1 keysym 0x1008ff59
  ['XF86Display', 0xe3],
  // evdev scancode 0xe4 xkb keycode 236 xkb keyname I236  level 1 keysym 0x1008ff04
  ['XF86KbdLightOnOff', 0xe4],
  // evdev scancode 0xe5 xkb keycode 237 xkb keyname I237  level 1 keysym 0x1008ff06
  ['XF86KbdBrightnessDown', 0xe5],
  // evdev scancode 0xe6 xkb keycode 238 xkb keyname I238  level 1 keysym 0x1008ff05
  ['XF86KbdBrightnessUp', 0xe6],
  // evdev scancode 0xe7 xkb keycode 239 xkb keyname I239  level 1 keysym 0x1008ff7b
  ['XF86Send', 0xe7],
  // evdev scancode 0xe8 xkb keycode 240 xkb keyname I240  level 1 keysym 0x1008ff72
  ['XF86Reply', 0xe8],
  // evdev scancode 0xe9 xkb keycode 241 xkb keyname I241  level 1 keysym 0x1008ff90
  ['XF86MailForward', 0xe9],
  // evdev scancode 0xea xkb keycode 242 xkb keyname I242  level 1 keysym 0x1008ff77
  ['XF86Save', 0xea],
  // evdev scancode 0xeb xkb keycode 243 xkb keyname I243  level 1 keysym 0x1008ff5b
  ['XF86Documents', 0xeb],
  // evdev scancode 0xec xkb keycode 244 xkb keyname I244  level 1 keysym 0x1008ff93
  ['XF86Battery', 0xec],
  // evdev scancode 0xed xkb keycode 245 xkb keyname I245  level 1 keysym 0x1008ff94
  ['XF86Bluetooth', 0xed],
  // evdev scancode 0xee xkb keycode 246 xkb keyname I246  level 1 keysym 0x1008ff95
  ['XF86WLAN', 0xee],
  // evdev scancode 0xef xkb keycode 247 xkb keyname I247  level 1 keysym 0x1008ff96
  ['XF86UWB', 0xef],
  // evdev scancode 0xf1 xkb keycode 249 xkb keyname I249  level 1 keysym 0x1008fe22
  ['XF86Next_VMode', 0xf1],
  // evdev scancode 0xf2 xkb keycode 250 xkb keyname I250  level 1 keysym 0x1008fe23
  ['XF86Prev_VMode', 0xf2],
  // evdev scancode 0xf3 xkb keycode 251 xkb keyname I251  level 1 keysym 0x1008ff07
  ['XF86MonBrightnessCycle', 0xf3],
  // evdev scancode 0xf4 xkb keycode 252 xkb keyname I252  level 1 keysym 0x100810f4
  ['XF86BrightnessAuto', 0xf4],
  // evdev scancode 0xf5 xkb keycode 253 xkb keyname I253  level 1 keysym 0x100810f5
  ['XF86DisplayOff', 0xf5],
  // evdev scancode 0xf6 xkb keycode 254 xkb keyname I254  level 1 keysym 0x1008ffb4
  ['XF86WWAN', 0xf6],
  // evdev scancode 0xf7 xkb keycode 255 xkb keyname I255  level 1 keysym 0x1008ffb5
  ['XF86RFKill', 0xf7],
  // evdev scancode 0xf8 xkb keycode 256 xkb keyname I256  level 1 keysym 0x1008ffb2
  ['XF86AudioMicMute', 0xf8],
  // evdev scancode 0x166 xkb keycode 366 xkb keyname I366  level 1 keysym 0x10081166
  ['XF86Info', 0x166],
  // evdev scancode 0x16c xkb keycode 372 xkb keyname I372  level 1 keysym 0x1008ff30
  ['XF86Favorites', 0x16c],
  // evdev scancode 0x173 xkb keycode 379 xkb keyname I379  level 1 keysym 0x1008ff9c
  ['XF86CycleAngle', 0x173],
  // evdev scancode 0x174 xkb keycode 380 xkb keyname I380  level 1 keysym 0x1008ffb8
  ['XF86FullScreen', 0x174],
  // evdev scancode 0x176 xkb keycode 382 xkb keyname I382  level 1 keysym 0x1008ffb3
  ['XF86Keyboard', 0x176],
  // evdev scancode 0x177 xkb keycode 383 xkb keyname I383  level 1 keysym 0x10081177
  ['XF86AspectRatio', 0x177],
  // evdev scancode 0x185 xkb keycode 397 xkb keyname I397  level 1 keysym 0x10081185
  ['XF86DVD', 0x185],
  // evdev scancode 0x188 xkb keycode 400 xkb keyname I400  level 1 keysym 0x10081188
  ['XF86Audio', 0x188],
  // evdev scancode 0x189 xkb keycode 401 xkb keyname I401  level 1 keysym 0x1008ff87
  ['XF86Video', 0x189],
  // evdev scancode 0x18d xkb keycode 405 xkb keyname I405  level 1 keysym 0x1008ff20
  ['XF86Calendar', 0x18d],
  // evdev scancode 0x192 xkb keycode 410 xkb keyname I410  level 1 keysym 0x10081192
  ['XF86ChannelUp', 0x192],
  // evdev scancode 0x193 xkb keycode 411 xkb keyname I411  level 1 keysym 0x10081193
  ['XF86ChannelDown', 0x193],
  // evdev scancode 0x19a xkb keycode 418 xkb keyname I418  level 1 keysym 0x1008ff99
  ['XF86AudioRandomPlay', 0x19a],
  // evdev scancode 0x19b xkb keycode 419 xkb keyname I419  level 1 keysym 0x1008119b
  ['XF86Break', 0x19b],
  // evdev scancode 0x1a0 xkb keycode 424 xkb keyname I424  level 1 keysym 0x100811a0
  ['XF86VideoPhone', 0x1a0],
  // evdev scancode 0x1a1 xkb keycode 425 xkb keyname I425  level 1 keysym 0x1008ff5e
  ['XF86Game', 0x1a1],
  // evdev scancode 0x1a2 xkb keycode 426 xkb keyname I426  level 1 keysym 0x1008ff8b
  ['XF86ZoomIn', 0x1a2],
  // evdev scancode 0x1a3 xkb keycode 427 xkb keyname I427  level 1 keysym 0x1008ff8c
  ['XF86ZoomOut', 0x1a3],
  // evdev scancode 0x1a4 xkb keycode 428 xkb keyname I428  level 1 keysym 0x100811a4
  ['XF86ZoomReset', 0x1a4],
  // evdev scancode 0x1a5 xkb keycode 429 xkb keyname I429  level 1 keysym 0x1008ff89
  ['XF86Word', 0x1a5],
  // evdev scancode 0x1a6 xkb keycode 430 xkb keyname I430  level 1 keysym 0x100811a6
  ['XF86Editor', 0x1a6],
  // evdev scancode 0x1a7 xkb keycode 431 xkb keyname I431  level 1 keysym 0x1008ff5c
  ['XF86Excel', 0x1a7],
  // evdev scancode 0x1a8 xkb keycode 432 xkb keyname I432  level 1 keysym 0x100811a8
  ['XF86GraphicsEditor', 0x1a8],
  // evdev scancode 0x1a9 xkb keycode 433 xkb keyname I433  level 1 keysym 0x100811a9
  ['XF86Presentation', 0x1a9],
  // evdev scancode 0x1aa xkb keycode 434 xkb keyname I434  level 1 keysym 0x100811aa
  ['XF86Database', 0x1aa],
  // evdev scancode 0x1ab xkb keycode 435 xkb keyname I435  level 1 keysym 0x1008ff69
  ['XF86News', 0x1ab],
  // evdev scancode 0x1ac xkb keycode 436 xkb keyname I436  level 1 keysym 0x100811ac
  ['XF86Voicemail', 0x1ac],
  // evdev scancode 0x1ad xkb keycode 437 xkb keyname I437  level 1 keysym 0x100811ad
  ['XF86Addressbook', 0x1ad],
  // evdev scancode 0x1ae xkb keycode 438 xkb keyname I438  level 1 keysym 0x1008ff8e
  ['XF86Messenger', 0x1ae],
  // evdev scancode 0x1af xkb keycode 439 xkb keyname I439  level 1 keysym 0x100811af
  ['XF86DisplayToggle', 0x1af],
  // evdev scancode 0x1b0 xkb keycode 440 xkb keyname I440  level 1 keysym 0x100811b0
  ['XF86SpellCheck', 0x1b0],
  // evdev scancode 0x1b1 xkb keycode 441 xkb keyname I441  level 1 keysym 0x1008ff61
  ['XF86LogOff', 0x1b1],
  // evdev scancode 0x1b2 xkb keycode 442 xkb keyname I442  level 1 keysym 0x24
  ['dollar', 0x1b2],
  // evdev scancode 0x1b3 xkb keycode 443 xkb keyname I443  level 1 keysym 0x20ac
  ['EuroSign', 0x1b3],
  // evdev scancode 0x1b4 xkb keycode 444 xkb keyname I444  level 1 keysym 0x1008ff9d
  ['XF86FrameBack', 0x1b4],
  // evdev scancode 0x1b5 xkb keycode 445 xkb keyname I445  level 1 keysym 0x1008ff9e
  ['XF86FrameForward', 0x1b5],
  // evdev scancode 0x1b6 xkb keycode 446 xkb keyname I446  level 1 keysym 0x100811b6
  ['XF86ContextMenu', 0x1b6],
  // evdev scancode 0x1b7 xkb keycode 447 xkb keyname I447  level 1 keysym 0x100811b7
  ['XF86MediaRepeat', 0x1b7],
  // evdev scancode 0x1b8 xkb keycode 448 xkb keyname I448  level 1 keysym 0x100811b8
  ['XF8610ChannelsUp', 0x1b8],
  // evdev scancode 0x1b9 xkb keycode 449 xkb keyname I449  level 1 keysym 0x100811b9
  ['XF8610ChannelsDown', 0x1b9],
  // evdev scancode 0x1ba xkb keycode 450 xkb keyname I450  level 1 keysym 0x100811ba
  ['XF86Images', 0x1ba],
  // evdev scancode 0x1bc xkb keycode 452 xkb keyname I452  level 1 keysym 0x100811bc
  ['XF86NotificationCenter', 0x1bc],
  // evdev scancode 0x1bd xkb keycode 453 xkb keyname I453  level 1 keysym 0x100811bd
  ['XF86PickupPhone', 0x1bd],
  // evdev scancode 0x1be xkb keycode 454 xkb keyname I454  level 1 keysym 0x100811be
  ['XF86HangupPhone', 0x1be],
  // evdev scancode 0x1d0 xkb keycode 472 xkb keyname I472  level 1 keysym 0x100811d0
  ['XF86Fn', 0x1d0],
  // evdev scancode 0x1d1 xkb keycode 473 xkb keyname I473  level 1 keysym 0x100811d1
  ['XF86Fn_Esc', 0x1d1],
  // evdev scancode 0x1e5 xkb keycode 493 xkb keyname I493  level 1 keysym 0x100811e5
  ['XF86FnRightshift', 0x1e5],
  // evdev scancode 0x1f1 xkb keycode 505 xkb keyname I505  level 1 keysym 0xfff1
  ['braille_dot_1', 0x1f1],
  // evdev scancode 0x1f2 xkb keycode 506 xkb keyname I506  level 1 keysym 0xfff2
  ['braille_dot_2', 0x1f2],
  // evdev scancode 0x1f3 xkb keycode 507 xkb keyname I507  level 1 keysym 0xfff3
  ['braille_dot_3', 0x1f3],
  // evdev scancode 0x1f4 xkb keycode 508 xkb keyname I508  level 1 keysym 0xfff4
  ['braille_dot_4', 0x1f4],
  // evdev scancode 0x1f5 xkb keycode 509 xkb keyname I509  level 1 keysym 0xfff5
  ['braille_dot_5', 0x1f5],
  // evdev scancode 0x1f6 xkb keycode 510 xkb keyname I510  level 1 keysym 0xfff6
  ['braille_dot_6', 0x1f6],
  // evdev scancode 0x1f7 xkb keycode 511 xkb keyname I511  level 1 keysym 0xfff7
  ['braille_dot_7', 0x1f7],
  // evdev scancode 0x1f8 xkb keycode 512 xkb keyname I512  level 1 keysym 0xfff8
  ['braille_dot_8', 0x1f8],
  // evdev scancode 0x1f9 xkb keycode 513 xkb keyname I513  level 1 keysym 0xfff9
  ['braille_dot_9', 0x1f9],
  // evdev scancode 0x1fa xkb keycode 514 xkb keyname I514  level 1 keysym 0xfff1
  ['braille_dot_1', 0x1fa],
  // evdev scancode 0x200 xkb keycode 520 xkb keyname I520  level 1 keysym 0x10081200
  ['XF86Numeric0', 0x200],
  // evdev scancode 0x201 xkb keycode 521 xkb keyname I521  level 1 keysym 0x10081201
  ['XF86Numeric1', 0x201],
  // evdev scancode 0x202 xkb keycode 522 xkb keyname I522  level 1 keysym 0x10081202
  ['XF86Numeric2', 0x202],
  // evdev scancode 0x203 xkb keycode 523 xkb keyname I523  level 1 keysym 0x10081203
  ['XF86Numeric3', 0x203],
  // evdev scancode 0x204 xkb keycode 524 xkb keyname I524  level 1 keysym 0x10081204
  ['XF86Numeric4', 0x204],
  // evdev scancode 0x205 xkb keycode 525 xkb keyname I525  level 1 keysym 0x10081205
  ['XF86Numeric5', 0x205],
  // evdev scancode 0x206 xkb keycode 526 xkb keyname I526  level 1 keysym 0x10081206
  ['XF86Numeric6', 0x206],
  // evdev scancode 0x207 xkb keycode 527 xkb keyname I527  level 1 keysym 0x10081207
  ['XF86Numeric7', 0x207],
  // evdev scancode 0x208 xkb keycode 528 xkb keyname I528  level 1 keysym 0x10081208
  ['XF86Numeric8', 0x208],
  // evdev scancode 0x209 xkb keycode 529 xkb keyname I529  level 1 keysym 0x10081209
  ['XF86Numeric9', 0x209],
  // evdev scancode 0x20a xkb keycode 530 xkb keyname I530  level 1 keysym 0x1008120a
  ['XF86NumericStar', 0x20a],
  // evdev scancode 0x20b xkb keycode 531 xkb keyname I531  level 1 keysym 0x1008120b
  ['XF86NumericPound', 0x20b],
  // evdev scancode 0x20c xkb keycode 532 xkb keyname I532  level 1 keysym 0x1008120c
  ['XF86NumericA', 0x20c],
  // evdev scancode 0x20d xkb keycode 533 xkb keyname I533  level 1 keysym 0x1008120d
  ['XF86NumericB', 0x20d],
  // evdev scancode 0x20e xkb keycode 534 xkb keyname I534  level 1 keysym 0x1008120e
  ['XF86NumericC', 0x20e],
  // evdev scancode 0x20f xkb keycode 535 xkb keyname I535  level 1 keysym 0x1008120f
  ['XF86NumericD', 0x20f],
  // evdev scancode 0x210 xkb keycode 536 xkb keyname I536  level 1 keysym 0x10081210
  ['XF86CameraFocus', 0x210],
  // evdev scancode 0x211 xkb keycode 537 xkb keyname I537  level 1 keysym 0x10081211
  ['XF86WPSButton', 0x211],
  // evdev scancode 0x212 xkb keycode 538 xkb keyname I538  level 1 keysym 0x1008ffa9
  ['XF86TouchpadToggle', 0x212],
  // evdev scancode 0x213 xkb keycode 539 xkb keyname I539  level 1 keysym 0x1008ffb0
  ['XF86TouchpadOn', 0x213],
  // evdev scancode 0x214 xkb keycode 540 xkb keyname I540  level 1 keysym 0x1008ffb1
  ['XF86TouchpadOff', 0x214],
  // evdev scancode 0x215 xkb keycode 541 xkb keyname I541  level 1 keysym 0x10081215
  ['XF86CameraZoomIn', 0x215],
  // evdev scancode 0x216 xkb keycode 542 xkb keyname I542  level 1 keysym 0x10081216
  ['XF86CameraZoomOut', 0x216],
  // evdev scancode 0x217 xkb keycode 543 xkb keyname I543  level 1 keysym 0x10081217
  ['XF86CameraUp', 0x217],
  // evdev scancode 0x218 xkb keycode 544 xkb keyname I544  level 1 keysym 0x10081218
  ['XF86CameraDown', 0x218],
  // evdev scancode 0x219 xkb keycode 545 xkb keyname I545  level 1 keysym 0x10081219
  ['XF86CameraLeft', 0x219],
  // evdev scancode 0x21a xkb keycode 546 xkb keyname I546  level 1 keysym 0x1008121a
  ['XF86CameraRight', 0x21a],
  // evdev scancode 0x21b xkb keycode 547 xkb keyname I547  level 1 keysym 0x1008121b
  ['XF86AttendantOn', 0x21b],
  // evdev scancode 0x21c xkb keycode 548 xkb keyname I548  level 1 keysym 0x1008121c
  ['XF86AttendantOff', 0x21c],
  // evdev scancode 0x21d xkb keycode 549 xkb keyname I549  level 1 keysym 0x1008121d
  ['XF86AttendantToggle', 0x21d],
  // evdev scancode 0x21e xkb keycode 550 xkb keyname I550  level 1 keysym 0x1008121e
  ['XF86LightsToggle', 0x21e],
  // evdev scancode 0x230 xkb keycode 568 xkb keyname I568  level 1 keysym 0x10081230
  ['XF86ALSToggle', 0x230],
  // evdev scancode 0x231 xkb keycode 569 xkb keyname I569  level 1 keysym 0x1008ffb7
  //['XF86RotationLockToggle', 0x231],
  // evdev scancode 0x240 xkb keycode 584 xkb keyname I584  level 1 keysym 0x10081240
  ['XF86Buttonconfig', 0x240],
  // evdev scancode 0x241 xkb keycode 585 xkb keyname I585  level 1 keysym 0x10081241
  ['XF86Taskmanager', 0x241],
  // evdev scancode 0x242 xkb keycode 586 xkb keyname I586  level 1 keysym 0x10081242
  ['XF86Journal', 0x242],
  // evdev scancode 0x243 xkb keycode 587 xkb keyname I587  level 1 keysym 0x10081243
  ['XF86controlPanel', 0x243],
  // evdev scancode 0x244 xkb keycode 588 xkb keyname I588  level 1 keysym 0x10081244
  ['XF86AppSelect', 0x244],
  // evdev scancode 0x245 xkb keycode 589 xkb keyname I589  level 1 keysym 0x10081245
  ['XF86Screensaver', 0x245],
  // evdev scancode 0x246 xkb keycode 590 xkb keyname I590  level 1 keysym 0x10081246
  ['XF86VoiceCommand', 0x246],
  // evdev scancode 0x247 xkb keycode 591 xkb keyname I591  level 1 keysym 0x10081247
  ['XF86Assistant', 0x247],
  // evdev scancode 0x248 xkb keycode 592 xkb keyname I592  level 1 keysym 0xfe08
  ['ISO_Next_Group', 0x248],
  // evdev scancode 0x249 xkb keycode 593 xkb keyname I593  level 1 keysym 0x10081249
  ['XF86EmojiPicker', 0x249],
  // evdev scancode 0x24a xkb keycode 594 xkb keyname I594  level 1 keysym 0x1008124a
  ['XF86Dictate', 0x24a],
  // evdev scancode 0x24b xkb keycode 595 xkb keyname I595  level 1 keysym 0x1008124b
  ['XF86CameraAccessEnable', 0x24b],
  // evdev scancode 0x24c xkb keycode 596 xkb keyname I596  level 1 keysym 0x1008124c
  ['XF86CameraAccessDisable', 0x24c],
  // evdev scancode 0x24d xkb keycode 597 xkb keyname I597  level 1 keysym 0x1008124d
  ['XF86CameraAccessToggle', 0x24d],
  // evdev scancode 0x250 xkb keycode 600 xkb keyname I600  level 1 keysym 0x10081250
  ['XF86BrightnessMin', 0x250],
  // evdev scancode 0x251 xkb keycode 601 xkb keyname I601  level 1 keysym 0x10081251
  ['XF86BrightnessMax', 0x251],
  // evdev scancode 0x260 xkb keycode 616 xkb keyname I616  level 1 keysym 0x10081260
  ['XF86KbdInputAssistPrev', 0x260],
  // evdev scancode 0x261 xkb keycode 617 xkb keyname I617  level 1 keysym 0x10081261
  ['XF86KbdInputAssistNext', 0x261],
  // evdev scancode 0x262 xkb keycode 618 xkb keyname I618  level 1 keysym 0x10081262
  ['XF86KbdInputAssistPrevgroup', 0x262],
  // evdev scancode 0x263 xkb keycode 619 xkb keyname I619  level 1 keysym 0x10081263
  ['XF86KbdInputAssistNextgroup', 0x263],
  // evdev scancode 0x264 xkb keycode 620 xkb keyname I620  level 1 keysym 0x10081264
  ['XF86KbdInputAssistAccept', 0x264],
  // evdev scancode 0x265 xkb keycode 621 xkb keyname I621  level 1 keysym 0x10081265
  ['XF86KbdInputAssistCancel', 0x265],
  // evdev scancode 0x266 xkb keycode 622 xkb keyname I622  level 1 keysym 0x10081266
  ['XF86RightUp', 0x266],
  // evdev scancode 0x267 xkb keycode 623 xkb keyname I623  level 1 keysym 0x10081267
  ['XF86RightDown', 0x267],
  // evdev scancode 0x268 xkb keycode 624 xkb keyname I624  level 1 keysym 0x10081268
  ['XF86LeftUp', 0x268],
  // evdev scancode 0x269 xkb keycode 625 xkb keyname I625  level 1 keysym 0x10081269
  ['XF86LeftDown', 0x269],
  // evdev scancode 0x26a xkb keycode 626 xkb keyname I626  level 1 keysym 0x1008126a
  ['XF86RootMenu', 0x26a],
  // evdev scancode 0x26b xkb keycode 627 xkb keyname I627  level 1 keysym 0x1008126b
  ['XF86MediaTopMenu', 0x26b],
  // evdev scancode 0x26c xkb keycode 628 xkb keyname I628  level 1 keysym 0x1008126c
  ['XF86Numeric11', 0x26c],
  // evdev scancode 0x26d xkb keycode 629 xkb keyname I629  level 1 keysym 0x1008126d
  ['XF86Numeric12', 0x26d],
  // evdev scancode 0x26e xkb keycode 630 xkb keyname I630  level 1 keysym 0x1008126e
  ['XF86AudioDesc', 0x26e],
  // evdev scancode 0x26f xkb keycode 631 xkb keyname I631  level 1 keysym 0x1008126f
  ['XF863DMode', 0x26f],
  // evdev scancode 0x270 xkb keycode 632 xkb keyname I632  level 1 keysym 0x10081270
  ['XF86NextFavorite', 0x270],
  // evdev scancode 0x271 xkb keycode 633 xkb keyname I633  level 1 keysym 0x10081271
  ['XF86StopRecord', 0x271],
  // evdev scancode 0x272 xkb keycode 634 xkb keyname I634  level 1 keysym 0x10081272
  ['XF86PauseRecord', 0x272],
  // evdev scancode 0x273 xkb keycode 635 xkb keyname I635  level 1 keysym 0x10081273
  ['XF86VOD', 0x273],
  // evdev scancode 0x274 xkb keycode 636 xkb keyname I636  level 1 keysym 0x10081274
  ['XF86Unmute', 0x274],
  // evdev scancode 0x275 xkb keycode 637 xkb keyname I637  level 1 keysym 0x10081275
  ['XF86FastReverse', 0x275],
  // evdev scancode 0x276 xkb keycode 638 xkb keyname I638  level 1 keysym 0x10081276
  ['XF86SlowReverse', 0x276],
  // evdev scancode 0x277 xkb keycode 639 xkb keyname I639  level 1 keysym 0x10081277
  ['XF86Data', 0x277],
  // evdev scancode 0x278 xkb keycode 640 xkb keyname I640  level 1 keysym 0x10081278
  ['XF86OnScreenKeyboard', 0x278],
  // evdev scancode 0x279 xkb keycode 641 xkb keyname I641  level 1 keysym 0x10081279
  ['XF86PrivacyScreenToggle', 0x279],
  // evdev scancode 0x27a xkb keycode 642 xkb keyname I642  level 1 keysym 0x1008127a
  ['XF86SelectiveScreenshot', 0x27a],
  // evdev scancode 0x27b xkb keycode 643 xkb keyname I643  level 1 keysym 0x1008127b
  ['XF86NextElement', 0x27b],
  // evdev scancode 0x27c xkb keycode 644 xkb keyname I644  level 1 keysym 0x1008127c
  ['XF86PreviousElement', 0x27c],
  // evdev scancode 0x27d xkb keycode 645 xkb keyname I645  level 1 keysym 0x1008127d
  ['XF86AutopilotEngageToggle', 0x27d],
  // evdev scancode 0x27e xkb keycode 646 xkb keyname I646  level 1 keysym 0x1008127e
  ['XF86MarkWaypoint', 0x27e],
  // evdev scancode 0x27f xkb keycode 647 xkb keyname I647  level 1 keysym 0x1008127f
  ['XF86Sos', 0x27f],
  // evdev scancode 0x280 xkb keycode 648 xkb keyname I648  level 1 keysym 0x10081280
  ['XF86NavChart', 0x280],
  // evdev scancode 0x281 xkb keycode 649 xkb keyname I649  level 1 keysym 0x10081281
  ['XF86FishingChart', 0x281],
  // evdev scancode 0x282 xkb keycode 650 xkb keyname I650  level 1 keysym 0x10081282
  ['XF86SingleRangeRadar', 0x282],
  // evdev scancode 0x283 xkb keycode 651 xkb keyname I651  level 1 keysym 0x10081283
  ['XF86DualRangeRadar', 0x283],
  // evdev scancode 0x284 xkb keycode 652 xkb keyname I652  level 1 keysym 0x10081284
  ['XF86RadarOverlay', 0x284],
  // evdev scancode 0x285 xkb keycode 653 xkb keyname I653  level 1 keysym 0x10081285
  ['XF86TraditionalSonar', 0x285],
  // evdev scancode 0x286 xkb keycode 654 xkb keyname I654  level 1 keysym 0x10081286
  ['XF86ClearvuSonar', 0x286],
  // evdev scancode 0x287 xkb keycode 655 xkb keyname I655  level 1 keysym 0x10081287
  ['XF86SidevuSonar', 0x287],
  // evdev scancode 0x288 xkb keycode 656 xkb keyname I656  level 1 keysym 0x10081288
  ['XF86NavInfo', 0x288],
  // evdev scancode 0x289 xkb keycode 657 xkb keyname I657  level 1 keysym 0x1008ff3b
  ['XF86BrightnessAdjust', 0x289],
  // evdev scancode 0x290 xkb keycode 664 xkb keyname I664  level 1 keysym 0x10081290
  ['XF86Macro1', 0x290],
  // evdev scancode 0x291 xkb keycode 665 xkb keyname I665  level 1 keysym 0x10081291
  ['XF86Macro2', 0x291],
  // evdev scancode 0x292 xkb keycode 666 xkb keyname I666  level 1 keysym 0x10081292
  ['XF86Macro3', 0x292],
  // evdev scancode 0x293 xkb keycode 667 xkb keyname I667  level 1 keysym 0x10081293
  ['XF86Macro4', 0x293],
  // evdev scancode 0x294 xkb keycode 668 xkb keyname I668  level 1 keysym 0x10081294
  ['XF86Macro5', 0x294],
  // evdev scancode 0x295 xkb keycode 669 xkb keyname I669  level 1 keysym 0x10081295
  ['XF86Macro6', 0x295],
  // evdev scancode 0x296 xkb keycode 670 xkb keyname I670  level 1 keysym 0x10081296
  ['XF86Macro7', 0x296],
  // evdev scancode 0x297 xkb keycode 671 xkb keyname I671  level 1 keysym 0x10081297
  ['XF86Macro8', 0x297],
  // evdev scancode 0x298 xkb keycode 672 xkb keyname I672  level 1 keysym 0x10081298
  ['XF86Macro9', 0x298],
  // evdev scancode 0x299 xkb keycode 673 xkb keyname I673  level 1 keysym 0x10081299
  ['XF86Macro10', 0x299],
  // evdev scancode 0x29a xkb keycode 674 xkb keyname I674  level 1 keysym 0x1008129a
  ['XF86Macro11', 0x29a],
  // evdev scancode 0x29b xkb keycode 675 xkb keyname I675  level 1 keysym 0x1008129b
  ['XF86Macro12', 0x29b],
  // evdev scancode 0x29c xkb keycode 676 xkb keyname I676  level 1 keysym 0x1008129c
  ['XF86Macro13', 0x29c],
  // evdev scancode 0x29d xkb keycode 677 xkb keyname I677  level 1 keysym 0x1008129d
  ['XF86Macro14', 0x29d],
  // evdev scancode 0x29e xkb keycode 678 xkb keyname I678  level 1 keysym 0x1008129e
  ['XF86Macro15', 0x29e],
  // evdev scancode 0x29f xkb keycode 679 xkb keyname I679  level 1 keysym 0x1008129f
  ['XF86Macro16', 0x29f],
  // evdev scancode 0x2a0 xkb keycode 680 xkb keyname I680  level 1 keysym 0x100812a0
  ['XF86Macro17', 0x2a0],
  // evdev scancode 0x2a1 xkb keycode 681 xkb keyname I681  level 1 keysym 0x100812a1
  ['XF86Macro18', 0x2a1],
  // evdev scancode 0x2a2 xkb keycode 682 xkb keyname I682  level 1 keysym 0x100812a2
  ['XF86Macro19', 0x2a2],
  // evdev scancode 0x2a3 xkb keycode 683 xkb keyname I683  level 1 keysym 0x100812a3
  ['XF86Macro20', 0x2a3],
  // evdev scancode 0x2a4 xkb keycode 684 xkb keyname I684  level 1 keysym 0x100812a4
  ['XF86Macro21', 0x2a4],
  // evdev scancode 0x2a5 xkb keycode 685 xkb keyname I685  level 1 keysym 0x100812a5
  ['XF86Macro22', 0x2a5],
  // evdev scancode 0x2a6 xkb keycode 686 xkb keyname I686  level 1 keysym 0x100812a6
  ['XF86Macro23', 0x2a6],
  // evdev scancode 0x2a7 xkb keycode 687 xkb keyname I687  level 1 keysym 0x100812a7
  ['XF86Macro24', 0x2a7],
  // evdev scancode 0x2a8 xkb keycode 688 xkb keyname I688  level 1 keysym 0x100812a8
  ['XF86Macro25', 0x2a8],
  // evdev scancode 0x2a9 xkb keycode 689 xkb keyname I689  level 1 keysym 0x100812a9
  ['XF86Macro26', 0x2a9],
  // evdev scancode 0x2aa xkb keycode 690 xkb keyname I690  level 1 keysym 0x100812aa
  ['XF86Macro27', 0x2aa],
  // evdev scancode 0x2ab xkb keycode 691 xkb keyname I691  level 1 keysym 0x100812ab
  ['XF86Macro28', 0x2ab],
  // evdev scancode 0x2ac xkb keycode 692 xkb keyname I692  level 1 keysym 0x100812ac
  ['XF86Macro29', 0x2ac],
  // evdev scancode 0x2ad xkb keycode 693 xkb keyname I693  level 1 keysym 0x100812ad
  ['XF86Macro30', 0x2ad],
  // evdev scancode 0x2b0 xkb keycode 696 xkb keyname I696  level 1 keysym 0x100812b0
  ['XF86MacroRecordStart', 0x2b0],
  // evdev scancode 0x2b1 xkb keycode 697 xkb keyname I697  level 1 keysym 0x100812b1
  ['XF86MacroRecordStop', 0x2b1],
  // evdev scancode 0x2b2 xkb keycode 698 xkb keyname I698  level 1 keysym 0x100812b2
  ['XF86MacroPresetCycle', 0x2b2],
  // evdev scancode 0x2b3 xkb keycode 699 xkb keyname I699  level 1 keysym 0x100812b3
  ['XF86MacroPreset1', 0x2b3],
  // evdev scancode 0x2b4 xkb keycode 700 xkb keyname I700  level 1 keysym 0x100812b4
  ['XF86MacroPreset2', 0x2b4],
  // evdev scancode 0x2b5 xkb keycode 701 xkb keyname I701  level 1 keysym 0x100812b5
  ['XF86MacroPreset3', 0x2b5],
  // evdev scancode 0x2b8 xkb keycode 704 xkb keyname I704  level 1 keysym 0x100812b8
  ['XF86KbdLcdMenu1', 0x2b8],
  // evdev scancode 0x2b9 xkb keycode 705 xkb keyname I705  level 1 keysym 0x100812b9
  ['XF86KbdLcdMenu2', 0x2b9],
  // evdev scancode 0x2ba xkb keycode 706 xkb keyname I706  level 1 keysym 0x100812ba
  ['XF86KbdLcdMenu3', 0x2ba],
  // evdev scancode 0x2bb xkb keycode 707 xkb keyname I707  level 1 keysym 0x100812bb
  ['XF86KbdLcdMenu4', 0x2bb],
  // evdev scancode 0x2bc xkb keycode 708 xkb keyname I708  level 1 keysym 0x100812bc
  ['XF86KbdLcdMenu5', 0x2bc],
];
export default keymap;
