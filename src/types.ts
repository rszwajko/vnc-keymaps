// Full list of modifiers :
// https://github.com/xkbcommon/libxkbcommon/blob/b21a58d0cb00c117a4821ac528b586c6d7222f0b/doc/keymap-text-format-v1-v2.md?plain=1#L153
// Limit the list to modifiers that are actually used in our keymaps
export type KeyModifier = 'altgr' | 'control' | 'alt' | 'shift';

export type KeyMapping =
  | [string, number, KeyModifier, KeyModifier]
  | [string, number, KeyModifier]
  | [string, number];

export type KeyMap = KeyMapping[];

export type KeyMapDef = {
  // country or language code
  country: string;
  description: string;
  map: KeyMap;
  variant?: string;
};

export type CharMapping = {
  char?: string;
  keysym: number;
  scanCode: number;
};

export type CharMappingWithModifiers = {
  mapping: CharMapping;
  modifiers: CharMapping[];
};

export const KeyboardLayoutCodes = ['de', 'en-gb', 'en-us', 'fr', 'pl'] as const;

export type KeyboardLayout = (typeof KeyboardLayoutCodes)[number];

/**
 *
 * @param name any
 * @returns true if KeyboardLayout
 */
export function isKeyboardLayout(name: unknown): name is KeyboardLayout {
  return typeof name === 'string' && KeyboardLayoutCodes.includes(name as KeyboardLayout);
}

export const LINE_FEED = 10;
export const HORIZONTAL_TAB = 9;
