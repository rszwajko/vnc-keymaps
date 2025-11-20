import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import { fileURLToPath, URL } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  includeIgnoreFile(gitignorePath, '.gitignore'),
]);
