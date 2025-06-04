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
# 5. fix comments: # => // 
sed -E "s/^#\s+SPDX.+/#/" \
| sed -E "/^[^#]/s/\s+/', '/g" \
| sed -E "/^[^#]/s/^(.+)$/['\1'],/" \
| sed -E "/^[^#]/s/('(0x\w+)')/\2/" \
| sed -E "s/^#/\/\//"

echo "];"
echo "export default keymap;"