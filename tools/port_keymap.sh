#!/bin/bash

# add licence used by this project
echo "// SPDX-License-Identifier: MIT"
echo "import { KeyMap } from '../types';"
echo "const keymap: KeyMap = ["
# 1. remove the licence proposed by the tool
# 2. add commas between the columns and start the quotes
#    Escape 0x01 => Escape', '0x01 
# 3. add array start/end brackets
#    Escape', '0x01 => ['Escape', '0x01'],
# 4. fix hex numbers
#    ['Escape', '0x01'], => ['Escape', 0x01],
# 5. drop rules with Lock (CapsLock) - no support for reading the remote keyboard state 
# 6. convert Mod5 to altgr
#    for details see the mappings from real to usual modifiers in 
#    https://github.com/xkbcommon/libxkbcommon/blob/b21a58d0cb00c117a4821ac528b586c6d7222f0b/doc/keymap-text-format-v1-v2.md?plain=1#L153
# 7. convert Shift to shift
# 8. convert Control to control
# 9. convert Mod1 to alt
# 10. drop Mod2(NumLock) - similar as with Lock
# 11. fix comments: # => // 
sed -E "s/^#\s+SPDX.+/#/" \
| sed -E "/^[^#]/s/\s+/', '/g" \
| sed -E "/^[^#]/s/^(.+)$/['\1'],/" \
| sed -E "/^[^#]/s/('(0x\w+)')/\2/" \
| sed -E "s/^(.+Lock.*)/#\1/" \
| sed -E "s/Mod5/altgr/g" \
| sed -E "s/Shift/shift/g" \
| sed -E "s/Control/control/g" \
| sed -E "s/Mod1/alt/g" \
| sed -E "s/^(.+Mod2.*)/# \1/" \
| sed -E "s/^#/\/\//"

echo "];"
echo "export default keymap;"