import { KeyModifier } from '../types';

/**
 * Converted to TS from: https://github.com/qemu/qemu/blob/b69801dd6b1eb4d107f7c2f643adf0a4e3ec9124/pc-bios/keymaps/sv
 * cat input | sed -E "/^[^#]/s/\s+/', '/g" | sed -E "/^[^#]/s/^(.+)$/['\1'],/" | sed -E "/^[^#]/s/('(0x\w+)')/\2/"| sed -E "s/^#/\/\//" > output
 */

// TODO: add support for extra modifiers
type Modifier = 'addupper' | 'inhibit' | 'localstate' | KeyModifier;

const keymap: (
  | [string, number, Modifier, Modifier]
  | [string, number, Modifier]
  | [string, number]
)[] = [
  ['map', 0x0000041d],

  ['Shift_R', 0x36],
  ['Shift_L', 0x2a],

  ['Alt_R', 0xb8],
  ['Mode_switch', 0xb8],
  ['ISO_Level3_Shift', 0xb8],
  ['Alt_L', 0x38],

  ['Control_R', 0x9d],
  ['Control_L', 0x1d],

  // Translate Super to Windows keys.
  // This is hardcoded. See documentation for details.
  ['Super_R', 0xdc],
  ['Super_L', 0xdb],

  // Translate Menu to the Windows Application key.
  ['Menu', 0xdd],

  //
  // Top row
  //
  ['1', 0x2],
  ['2', 0x3],
  ['3', 0x4],
  ['4', 0x5],
  ['5', 0x6],
  ['6', 0x7],
  ['7', 0x8],
  ['8', 0x9],
  ['9', 0xa],
  ['0', 0xb],
  ['BackSpace', 0xe],

  //
  // QWERTY first row
  //
  ['Tab', 0xf, 'localstate'],
  ['ISO_Left_Tab', 0xf, 'shift'],
  ['q', 0x10, 'addupper'],
  ['w', 0x11, 'addupper'],
  ['e', 0x12, 'addupper'],
  ['r', 0x13, 'addupper'],
  ['t', 0x14, 'addupper'],
  ['y', 0x15, 'addupper'],
  ['u', 0x16, 'addupper'],
  ['i', 0x17, 'addupper'],
  ['o', 0x18, 'addupper'],
  ['p', 0x19, 'addupper'],

  //
  // QWERTY second row
  //
  ['a', 0x1e, 'addupper'],
  ['s', 0x1f, 'addupper'],
  ['d', 0x20, 'addupper'],
  ['f', 0x21, 'addupper'],
  ['g', 0x22, 'addupper'],
  ['h', 0x23, 'addupper'],
  ['j', 0x24, 'addupper'],
  ['k', 0x25, 'addupper'],
  ['l', 0x26, 'addupper'],
  ['Return', 0x1c, 'localstate'],

  //
  // QWERTY third row
  //
  ['z', 0x2c, 'addupper'],
  ['x', 0x2d, 'addupper'],
  ['c', 0x2e, 'addupper'],
  ['v', 0x2f, 'addupper'],
  ['b', 0x30, 'addupper'],
  ['n', 0x31, 'addupper'],
  ['m', 0x32, 'addupper'],

  ['space', 0x39, 'localstate'],

  ['less', 0x56],
  ['greater', 0x56, 'shift'],
  ['bar', 0x56, 'altgr'],
  ['brokenbar', 0x56, 'shift', 'altgr'],

  //
  // Esc and Function keys
  //
  ['Escape', 0x1, 'localstate'],
  ['F1', 0x3b, 'localstate'],
  ['F2', 0x3c, 'localstate'],
  ['F3', 0x3d, 'localstate'],
  ['F4', 0x3e, 'localstate'],
  ['F5', 0x3f, 'localstate'],
  ['F6', 0x40, 'localstate'],
  ['F7', 0x41, 'localstate'],
  ['F8', 0x42, 'localstate'],
  ['F9', 0x43, 'localstate'],
  ['F10', 0x44, 'localstate'],
  ['F11', 0x57, 'localstate'],
  ['F12', 0x58, 'localstate'],

  // Printscreen, Scrollock and Pause
  // Printscreen really requires four scancodes (0xe0, 0x2a, 0xe0, 0x37),
  // but (0xe0, 0x37) seems to work.
  ['Print', 0xb7, 'localstate'],
  ['Sys_Req', 0xb7, 'localstate'],
  ['Execute', 0xb7, 'localstate'],
  ['Scroll_Lock', 0x46],

  //
  // Insert - PgDown
  //
  ['Insert', 0xd2, 'localstate'],
  ['Delete', 0xd3, 'localstate'],
  ['Home', 0xc7, 'localstate'],
  ['End', 0xcf, 'localstate'],
  ['Page_Up', 0xc9, 'localstate'],
  ['Page_Down', 0xd1, 'localstate'],

  //
  // Arrow keys
  //
  ['Left', 0xcb, 'localstate'],
  ['Up', 0xc8, 'localstate'],
  ['Down', 0xd0, 'localstate'],
  ['Right', 0xcd, 'localstate'],

  //
  // Numpad
  //
  ['Num_Lock', 0x45],
  ['KP_Divide', 0xb5],
  ['KP_Multiply', 0x37],
  ['KP_Subtract', 0x4a],
  ['KP_Add', 0x4e],
  ['KP_Enter', 0x9c],

  ['KP_Decimal', 0x53, 'numlock'],
  ['KP_Separator', 0x53, 'numlock'],
  ['KP_Delete', 0x53],

  ['KP_0', 0x52, 'numlock'],
  ['KP_Insert', 0x52],

  ['KP_1', 0x4f, 'numlock'],
  ['KP_End', 0x4f],

  ['KP_2', 0x50, 'numlock'],
  ['KP_Down', 0x50],

  ['KP_3', 0x51, 'numlock'],
  ['KP_Next', 0x51],

  ['KP_4', 0x4b, 'numlock'],
  ['KP_Left', 0x4b],

  ['KP_5', 0x4c, 'numlock'],
  ['KP_Begin', 0x4c],

  ['KP_6', 0x4d, 'numlock'],
  ['KP_Right', 0x4d],

  ['KP_7', 0x47, 'numlock'],
  ['KP_Home', 0x47],

  ['KP_8', 0x48, 'numlock'],
  ['KP_Up', 0x48],

  ['KP_9', 0x49, 'numlock'],
  ['KP_Prior', 0x49],

  ['Caps_Lock', 0x3a],
  //
  // Inhibited keys
  //
  ['Multi_key', 0x0, 'inhibit'],

  //
  // Top row
  //
  ['section', 0x29],
  ['onehalf', 0x29, 'shift'],

  // 1
  ['exclam', 0x2, 'shift'],

  // 2
  ['quotedbl', 0x3, 'shift'],
  ['at', 0x3, 'altgr'],

  // 3
  ['numbersign', 0x4, 'shift'],
  ['sterling', 0x4, 'altgr'],
  // 4
  ['currency', 0x5, 'shift'],
  ['dollar', 0x5, 'altgr'],
  // 5
  ['percent', 0x6, 'shift'],
  // 6
  ['ampersand', 0x7, 'shift'],
  // 7
  ['slash', 0x8, 'shift'],
  ['braceleft', 0x8, 'altgr'],
  // 8
  ['parenleft', 0x9, 'shift'],
  ['bracketleft', 0x9, 'altgr'],
  // 9
  ['parenright', 0xa, 'shift'],
  ['bracketright', 0xa, 'altgr'],
  // 0
  ['equal', 0xb, 'shift'],
  ['braceright', 0xb, 'altgr'],

  ['plus', 0xc],
  ['question', 0xc, 'shift'],
  ['backslash', 0xc, 'altgr'],

  ['acute', 0xd],
  ['dead_acute', 0xd],
  ['grave', 0xd, 'shift'],
  ['dead_grave', 0xd, 'shift'],

  //
  // QWERTY first row
  //
  ['EuroSign', 0x12, 'altgr'],
  ['aring', 0x1a],
  ['Aring', 0x1a, 'shift'],
  ['dead_diaeresis', 0x1b],
  ['dead_circumflex', 0x1b, 'shift'],
  ['dead_tilde', 0x1b, 'altgr'],

  //
  // QWERTY second row
  //
  ['odiaeresis', 0x27],
  ['Odiaeresis', 0x27, 'shift'],
  ['adiaeresis', 0x28],
  ['Adiaeresis', 0x28, 'shift'],
  ['apostrophe', 0x2b],
  ['asterisk', 0x2b, 'shift'],

  //
  // QWERTY third row
  //
  ['less', 0x56],
  ['greater', 0x56, 'shift'],
  ['bar', 0x56, 'altgr'],
  ['mu', 0x32, 'altgr'],
  ['comma', 0x33],
  ['semicolon', 0x33, 'shift'],
  ['period', 0x34],
  ['colon', 0x34, 'shift'],
  ['minus', 0x35],
  ['underscore', 0x35, 'shift'],
];
export default keymap;
