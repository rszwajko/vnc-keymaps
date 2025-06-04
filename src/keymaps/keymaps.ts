import { KeyboardLayout, KeyMapDef } from '../types';

import de from './de';
import engGb from './eng-gb';
import engUs from './eng-us';
import fr from './fr';
import pl from './pl';

// see https://github.com/qemu/qemu/blob/b69801dd6b1eb4d107f7c2f643adf0a4e3ec9124/pc-bios/keymaps/meson.build
export const keyMaps: { [key in KeyboardLayout]: KeyMapDef } = {
  de: {
    country: 'de',
    description: 'German',
    map: de,
  },
  'en-gb': {
    country: 'gb',
    description: 'English (UK)',
    map: engGb,
  },
  'en-us': {
    country: 'us',
    description: 'English (US)',
    map: engUs,
  },
  fr: {
    country: 'fr',
    description: 'French',
    map: fr,
  },
  pl: {
    country: 'pl',
    description: 'Polish',
    map: pl,
  },
};
