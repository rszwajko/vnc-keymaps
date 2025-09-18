// Limit the list to modifiers that are actually used in Qemu keymaps
export type KeyModifier = 'altgr' | 'control' | 'numlock' | 'shift';

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

export const KeyboardLayoutCodes = [
  'ar',
  'bepo',
  'cz',
  'da',
  'de-ch',
  'de',
  'en-gb',
  'en-us',
  'es',
  'et',
  'fi',
  'fo',
  'fr-be',
  'fr-ca',
  'fr-ch',
  'fr',
  'hr',
  'hu',
  'is',
  'it',
  'ja',
  'lt',
  'lv',
  'mk',
  'nl',
  // , 'no' //removed due to incorrect format of generated files
  'pl',
  'pt-br',
  'pt',
  'ru',
  // , 'sl' // more work needed to integrate
  // , 'sv'
  'th',
  'tr',
] as const;

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
