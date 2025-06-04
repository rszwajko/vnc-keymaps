import { resolveCharMapping } from '../src/keyboard';
import { keyMaps } from '../src/keymaps/keymaps';

describe('Resolve well-known char mappings', () => {
  it('resolves colon for en-us', () =>
    expect(resolveCharMapping(':', keyMaps['en-us'].map)).toEqual({
      mapping: { char: ':', keysym: 0x3a, scanCode: 0x27 },
      modifiers: [{ keysym: 0xffe2, scanCode: 0x36 }],
    }));
  it("resolves 'A' for fr", () =>
    expect(resolveCharMapping('A', keyMaps['fr'].map)).toEqual({
      mapping: { char: 'A', keysym: 0x41, scanCode: 0x10 },
      modifiers: [{ keysym: 0xffe2, scanCode: 0x36 }],
    }));
});

describe('Handle special cases', () => {
  it('returns empty mapping for empty string', () =>
    expect(resolveCharMapping('', keyMaps['en-us'].map)).toEqual({
      mapping: { char: '', keysym: 0, scanCode: 0 },
      modifiers: [],
    }));
  it('returns empty mapping for unknown keysym - char \u2039 (U+2039) in en-us', () =>
    expect(resolveCharMapping('', keyMaps['en-us'].map)).toEqual({
      mapping: { char: '', keysym: 0, scanCode: 0 },
      modifiers: [],
    }));
  it('returns empty scancode for chars missing in the keymap (Aogonek in en-us) ', () =>
    expect(resolveCharMapping('Ą', keyMaps['en-us'].map)).toEqual({
      mapping: { char: 'Ą', keysym: 0x1a1, scanCode: 0 },
      modifiers: [],
    }));
  it('resolves new line', () =>
    expect(resolveCharMapping('\n', keyMaps['en-us'].map)).toEqual({
      mapping: { char: 'Enter', keysym: 0xff0d, scanCode: 0x1c },
      modifiers: [],
    }));
  it('resolves tab', () =>
    expect(resolveCharMapping('\t', keyMaps['en-us'].map)).toEqual({
      mapping: { char: 'Tab', keysym: 0xff09, scanCode: 0xf },
      modifiers: [],
    }));
  it('resolves unicode based mnemonic names for \u2039 (U+2039) ', () => {
    // check if the name is unicode based
    expect(keyMaps['de'].map.find(([name]) => name === 'U2039')?.[1]).toEqual(0x2d);
    expect(resolveCharMapping('\u2039', keyMaps['de'].map)).toEqual({
      mapping: { char: '\u2039', keysym: 0x1002039, scanCode: 0x2d },
      modifiers: [
        { keysym: 0xffe2, scanCode: 0x36 },
        { keysym: 0xffea, scanCode: 0xe038 },
      ],
    });
  });
});
