# Contributing keymaps


1. install `qemu-tools` i.e. for Fedora
    ```bash
    dnf install qemu-tools
    ```
2. use `qemu-keymap` command to extract information from X11 keymaps
    
3. run `port_keymamps` script to adjust the licence and correct the syntax to TypeScript
    
    ```bash
        qemu-keymap -l us | ./port_keymap.sh > src/keymaps/eng-us.ts
    ```
4. correct the formatting
    ```bash
    yarn lint:fix
    ```