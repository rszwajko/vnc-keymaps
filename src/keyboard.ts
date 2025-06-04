import { ucs2keysym } from './keysym2ucs';
import { keysym_to_name } from './keysym2name';
import {
  CharMapping,
  CharMappingWithModifiers,
  HORIZONTAL_TAB,
  KeyMap,
  KeyModifier,
  LINE_FEED,
} from './types';

// see also '@novnc/novnc/lib/input/xtscancodes'
export const modifierToCharMapping: { [key in KeyModifier]: CharMapping } = {
  altgr: {
    keysym: 0xffea /* Alt_R */,
    scanCode: 0x64 /* evdev KEY_RIGHTAL */,
  },
  alt: {
    keysym: 0xffe9 /* Alt_L */,
    scanCode: 0x38 /* evdev KEY_LEFTALT	 */,
  },
  control: {
    keysym: 0xffe4 /* Control_R */,
    scanCode: 0x61 /* evdev KEY_RIGHTCTRL	 */,
  },
  shift: {
    keysym: 0xffe2 /* Shift_R */,
    scanCode: 0x36 /* evdev KEY_RIGHTSHIFT	*/,
  },
};

export const ENTER_MAPPING: CharMapping = {
  char: 'Enter',
  keysym: 0xff0d /*XK_Return*/,
  scanCode: 0x1c /*"Enter" */,
};
export const HORIZONTAL_TAB_MAPPING = {
  char: 'Tab',
  keysym: 0xff09 /* XK_Tab*/,
  scanCode: 0xf /*"Tab"  */,
};

const emptyMapping = (char: string, keysym: number): CharMappingWithModifiers => ({
  mapping: { char, keysym, scanCode: 0 },
  modifiers: [],
});

export const resolveCharMapping = (
  char: string,
  keymap: KeyMap,
): {
  mapping: CharMapping;
  modifiers: CharMapping[];
} => {
  const codePoint = char.codePointAt(0);
  if (codePoint === LINE_FEED) {
    return {
      mapping: ENTER_MAPPING,
      modifiers: [],
    };
  }

  if (codePoint === HORIZONTAL_TAB) {
    return {
      mapping: HORIZONTAL_TAB_MAPPING,
      modifiers: [],
    };
  }

  const unicode = char.codePointAt(0);
  if (unicode === undefined) {
    return emptyMapping(char, 0);
  }
  const keysym = ucs2keysym(unicode);

  // based on:
  //  https://github.com/xkbcommon/libxkbcommon/blob/b21a58d0cb00c117a4821ac528b586c6d7222f0b/src/keysym.c#L68
  //  https://github.com/xkbcommon/libxkbcommon/blob/b21a58d0cb00c117a4821ac528b586c6d7222f0b/tools/how-to-type.c#L25
  //  https://github.com/qemu/qemu/blob/b69801dd6b1eb4d107f7c2f643adf0a4e3ec9124/ui/keymaps.c#L43
  // some rules are(may be) based on names in format UXXXX
  const unicodeBasedName = `U${Number(unicode).toString(16).toUpperCase().padStart(4, '0')}`;
  // take first name - sort order in the list is important due to deprecation rules
  const [mnemonicName = unicodeBasedName] = keysym_to_name
    .filter(([keysymCode]) => keysymCode === keysym)
    .map(([, name]) => name);

  // take first mapping
  const [resolved] = keymap.filter(([name]) => name === mnemonicName);
  if (!resolved) {
    // no match in the keymap (by name)
    return emptyMapping(char, keysym);
  }

  const [, scanCode, ...modifiers] = resolved;

  return {
    mapping: {
      char,
      keysym,
      scanCode,
    },
    modifiers: modifiers.map((m) => modifierToCharMapping[m]),
  };
};
