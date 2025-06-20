import { KeyModifier } from '../types';

/**
 * Converted to TS from: https://github.com/qemu/qemu/blob/b69801dd6b1eb4d107f7c2f643adf0a4e3ec9124/pc-bios/keymaps/sl
 * cat input | sed -E "/^[^#]/s/\s+/', '/g" | sed -E "/^[^#]/s/^(.+)$/['\1'],/" | sed -E "/^[^#]/s/('(0x\w+)')/\2/"| sed -E "s/^#/\/\//" > output
 */

// TODO: add support for extra modifiers
type Modifier = 'addupper' | 'inhibit' | 'localstate' | KeyModifier;

const keymap: (
  | [string, number, Modifier, Modifier]
  | [string, number, Modifier]
  | [string, number]
)[] = [
  // generated from XKB map sl

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

  ['map', 0x424],
  ['exclam', 0x02, 'shift'],
  ['asciitilde', 0x02, 'altgr'],
  ['dead_tilde', 0x02, 'shift', 'altgr'],
  ['quotedbl', 0x03, 'shift'],
  ['dead_caron', 0x03, 'altgr'],
  ['caron', 0x03, 'shift', 'altgr'],
  ['numbersign', 0x04, 'shift'],
  ['asciicircum', 0x04, 'altgr'],
  ['dead_circumflex', 0x04, 'shift', 'altgr'],
  ['dollar', 0x05, 'shift'],
  ['dead_breve', 0x05, 'altgr'],
  ['breve', 0x05, 'shift', 'altgr'],
  ['percent', 0x06, 'shift'],
  ['degree', 0x06, 'altgr'],
  ['dead_abovering', 0x06, 'shift', 'altgr'],
  ['ampersand', 0x07, 'shift'],
  ['dead_ogonek', 0x07, 'altgr'],
  ['ogonek', 0x07, 'shift', 'altgr'],
  ['slash', 0x08, 'shift'],
  ['grave', 0x08, 'altgr'],
  ['dead_grave', 0x08, 'shift', 'altgr'],
  ['parenleft', 0x09, 'shift'],
  ['dead_abovedot', 0x09, 'altgr'],
  ['abovedot', 0x09, 'shift', 'altgr'],
  ['parenright', 0x0a, 'shift'],
  ['dead_acute', 0x0a, 'altgr'],
  ['equal', 0x0b, 'shift'],
  ['dead_doubleacute', 0x0b, 'altgr'],
  ['doubleacute', 0x0b, 'shift', 'altgr'],
  ['apostrophe', 0x0c],
  ['question', 0x0c, 'shift'],
  ['dead_diaeresis', 0x0c, 'altgr'],
  ['diaeresis', 0x0c, 'shift', 'altgr'],
  ['plus', 0x0d],
  ['asterisk', 0x0d, 'shift'],
  ['dead_cedilla', 0x0d, 'altgr'],
  ['cedilla', 0x0d, 'shift', 'altgr'],
  ['backslash', 0x10, 'altgr'],
  ['Greek_OMEGA', 0x10, 'shift', 'altgr'],
  ['bar', 0x11, 'altgr'],
  ['Lstroke', 0x11, 'shift', 'altgr'],
  ['EuroSign', 0x12, 'altgr'],
  ['paragraph', 0x13, 'altgr'],
  ['registered', 0x13, 'shift', 'altgr'],
  ['tslash', 0x14, 'altgr'],
  ['Tslash', 0x14, 'shift', 'altgr'],
  ['z', 0x15, 'addupper'],
  ['leftarrow', 0x15, 'altgr'],
  ['yen', 0x15, 'shift', 'altgr'],
  ['downarrow', 0x16, 'altgr'],
  ['uparrow', 0x16, 'shift', 'altgr'],
  ['rightarrow', 0x17, 'altgr'],
  ['idotless', 0x17, 'shift', 'altgr'],
  ['oslash', 0x18, 'altgr'],
  ['Ooblique', 0x18, 'shift', 'altgr'],
  ['thorn', 0x19, 'altgr'],
  ['THORN', 0x19, 'shift', 'altgr'],
  ['scaron', 0x1a],
  ['Scaron', 0x1a, 'shift'],
  ['division', 0x1a, 'altgr'],
  ['dstroke', 0x1b],
  ['Dstroke', 0x1b, 'shift'],
  ['multiply', 0x1b, 'altgr'],
  ['dead_macron', 0x1b, 'shift', 'altgr'],
  ['ae', 0x1e, 'altgr'],
  ['AE', 0x1e, 'shift', 'altgr'],
  ['ssharp', 0x1f, 'altgr'],
  ['section', 0x1f, 'shift', 'altgr'],
  ['eth', 0x20, 'altgr'],
  ['ETH', 0x20, 'shift', 'altgr'],
  ['bracketleft', 0x21, 'altgr'],
  ['ordfeminine', 0x21, 'shift', 'altgr'],
  ['bracketright', 0x22, 'altgr'],
  ['ENG', 0x22, 'shift', 'altgr'],
  ['hstroke', 0x23, 'altgr'],
  ['Hstroke', 0x23, 'shift', 'altgr'],
  ['lstroke', 0x25, 'altgr'],
  ['Lstroke', 0x26, 'altgr'],
  ['ccaron', 0x27],
  ['Ccaron', 0x27, 'shift'],
  ['cacute', 0x28],
  ['Cacute', 0x28, 'shift'],
  ['ssharp', 0x28, 'altgr'],
  ['dead_cedilla', 0x29],
  ['notsign', 0x29, 'altgr'],
  ['zcaron', 0x2b],
  ['Zcaron', 0x2b, 'shift'],
  ['currency', 0x2b, 'altgr'],
  ['y', 0x2c, 'addupper'],
  ['guillemotleft', 0x2c, 'altgr'],
  ['guillemotright', 0x2d, 'altgr'],
  ['cent', 0x2e, 'altgr'],
  ['copyright', 0x2e, 'shift', 'altgr'],
  ['at', 0x2f, 'altgr'],
  ['braceleft', 0x30, 'altgr'],
  ['braceright', 0x31, 'altgr'],
  ['section', 0x32, 'altgr'],
  ['masculine', 0x32, 'shift', 'altgr'],
  ['comma', 0x33],
  ['semicolon', 0x33, 'shift'],
  ['horizconnector', 0x33, 'altgr'],
  ['period', 0x34],
  ['colon', 0x34, 'shift'],
  ['periodcentered', 0x34, 'altgr'],
  ['minus', 0x35],
  ['underscore', 0x35, 'shift'],
  ['dead_belowdot', 0x35, 'altgr'],
];
export default keymap;
