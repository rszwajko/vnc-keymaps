/*
 * SPDX-License-Identifier: MIT
 * Based on libxkbcommon tools/how-to-type.c 61d8ec6763b1f381acaf457beb795fe74336eefe
 */

#include "config.h"

#include <getopt.h>
#include <locale.h>
#include <stdbool.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>

#include "xkbcommon/xkbcommon.h"
#include "src/utils.h"
#include "src/keysym.h"
#include "src/utf8-decoding.h"

#define ARRAY_SIZE(arr) ((sizeof(arr) / sizeof(*(arr))))

static void
usage(const char *argv0, FILE *fp)
{
    fprintf(fp, "Usage: %s [--help] --layout <layout> [--variant <variant>] "
                "[--options <options>] [--enable-environment-names] "
                "\n", argv0);
    fprintf(
        fp,
        "\n"
        "Prints the key combinations (scancode + modifiers) in the keymap's layouts following\n"
        "Qemu keymap format. Default XKB options used: ruleset '%s' model '%s' \n"
        "\n"
        "Options:\n"
        " --help\n"
        "    Print this help and exit\n"        
        " --layout <layout>\n"
        "    The XKB layout (default: '%s')\n"
        " --variant <variant>\n"
        "    The XKB layout variant (default: '%s')\n"
        " --options <options>\n"
        "    The XKB options (default: '%s')\n"
        " --enable-environment-names\n"
        "    Allow to set the default RMLVO values via the following environment variables:\n"
        "    - XKB_DEFAULT_RULES\n"
        "    - XKB_DEFAULT_MODEL\n"
        "    - XKB_DEFAULT_LAYOUT\n"
        "    - XKB_DEFAULT_VARIANT\n"
        "    - XKB_DEFAULT_OPTIONS\n"
        "    Note that this option may affect the default values of the previous options.\n"
        "\n",
        DEFAULT_XKB_RULES, DEFAULT_XKB_MODEL, DEFAULT_XKB_LAYOUT,
        DEFAULT_XKB_VARIANT ? DEFAULT_XKB_VARIANT : "<none>",
        DEFAULT_XKB_OPTIONS ? DEFAULT_XKB_OPTIONS : "<none>");
}

int
main(int argc, char *argv[])
{
    const char *rules = NULL;
    const char *model = NULL;
    const char *layout_ = NULL;
    const char *variant = NULL;
    const char *options = NULL;
    int name_ret = -1;
    bool use_env_names = false;
    int err = EXIT_FAILURE;
    struct xkb_context *ctx = NULL;
    char name[XKB_KEYSYM_NAME_MAX_SIZE];
    struct xkb_keymap *keymap = NULL;
    enum options {
        OPT_KEYSYM,
        OPT_ENABLE_ENV_NAMES,
        OPT_RULES,
        OPT_MODEL,
        OPT_LAYOUT,
        OPT_VARIANT,
        OPT_OPTIONS,
    };
    static struct option opts[] = {
        {"help",                 no_argument,            0, 'h'},
        {"enable-environment-names", no_argument,        0, OPT_ENABLE_ENV_NAMES},
        {"model",                required_argument,      0, OPT_MODEL},
        {"layout",               required_argument,      0, OPT_LAYOUT},
        {"variant",              required_argument,      0, OPT_VARIANT},
        {"options",              required_argument,      0, OPT_OPTIONS},
        {0, 0, 0, 0},
    };

    setlocale(LC_ALL, "");

    while (1) {
        int opt;
        int option_index = 0;

        opt = getopt_long(argc, argv, "h", opts, &option_index);
        if (opt == -1)
            break;

        switch (opt) {
        case OPT_ENABLE_ENV_NAMES:
            use_env_names = true;
            break;
        case OPT_LAYOUT:
            layout_ = optarg;
            break;
        case OPT_VARIANT:
            variant = optarg;
            break;
        case OPT_OPTIONS:
            options = optarg;
            break;
        case 'h':
            usage(argv[0], stdout);
            exit(EXIT_SUCCESS);
        default:
            usage(argv[0], stderr);
            exit(EXIT_INVALID_USAGE);
        }
    }

    const enum xkb_context_flags ctx_flags = (use_env_names)
                                           ? XKB_CONTEXT_NO_FLAGS
                                           : XKB_CONTEXT_NO_ENVIRONMENT_NAMES;

    ctx = xkb_context_new(ctx_flags);
    if (!ctx) {
        fprintf(stderr, "ERROR: Failed to create XKB context\n");
        goto err;
    }

    struct xkb_rule_names names = {
        .rules = rules,
        .model = model,
        .layout = layout_,
        .variant = variant,
        .options = options,
    };
    keymap = xkb_keymap_new_from_names(ctx, &names,
                                       XKB_KEYMAP_COMPILE_NO_FLAGS);
    if (!keymap) {
        fprintf(stderr, "ERROR: Failed to create XKB keymap\n");
        goto err;
    }

    const xkb_keycode_t min_keycode = xkb_keymap_min_keycode(keymap);
    const xkb_keycode_t max_keycode = xkb_keymap_max_keycode(keymap);
    const xkb_mod_index_t num_mods = xkb_keymap_num_mods(keymap);
    for (xkb_keycode_t keycode = min_keycode; keycode <= max_keycode; keycode++) {
        const char* const key_name = xkb_keymap_key_get_name(keymap, keycode);
        if (!key_name) {
            continue;
        }

        const xkb_layout_index_t num_layouts =
            xkb_keymap_num_layouts_for_key(keymap, keycode);
        for (xkb_layout_index_t layout = 0; layout < num_layouts; layout++) {
            const char *layout_name = xkb_keymap_layout_get_name(keymap, layout);
            if (!layout_name) {
                layout_name = "?";
            }

            const xkb_level_index_t num_levels =
                xkb_keymap_num_levels_for_key(keymap, keycode, layout);
            for (xkb_level_index_t level = 0; level < num_levels; level++) {
                const xkb_keysym_t *syms;
                const int num_syms = xkb_keymap_key_get_syms_by_level(
                    keymap, keycode, layout, level, &syms
                );
                if (num_syms != 1) {
                    printf("# ERROR: Multiple keysym for keycode %u and level %u \n", keycode,level);
                    continue;
                }

                name_ret = xkb_keysym_get_name(syms[0], name, sizeof(name));                
                if (name_ret < 0 || (size_t) name_ret >= sizeof(name)) {
                    printf("# ERROR: Failed to get name of keysym %#x \n", syms[0]);
                    continue;
                }

                xkb_mod_mask_t masks[100];
                const size_t num_masks = xkb_keymap_key_get_mods_for_level(
                    keymap, keycode, layout, level, masks, ARRAY_SIZE(masks)
                );
                for (size_t i = 0; i < num_masks; i++) {
                     const xkb_mod_mask_t mask = masks[i];

                    printf("# evdev scancode %#x xkb keycode %u xkb keyname %s  level %u keysym %#x\n",
                           keycode - 8,keycode, key_name, level + 1, syms[0]);
                    printf("%s %#x",name, keycode - 8);
                    for (xkb_mod_index_t mod = 0; mod < num_mods; mod++) {
                        if ((mask & (UINT32_C(1) << mod)) == 0) {
                            continue;
                        }
                        printf(" %s", xkb_keymap_mod_get_name(keymap, mod));
                    }
                    printf("\n");
                }
            }
        }
    }

    err = EXIT_SUCCESS;
err:
    xkb_keymap_unref(keymap);
    xkb_context_unref(ctx);
    return err;
}
