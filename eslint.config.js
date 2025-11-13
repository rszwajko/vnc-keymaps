import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import { fileURLToPath, URL } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: [js.configs.recommended] },
  { files: ['**/*.{ts,mts,cts}'], plugins: { tseslint }, extends: [tseslint.configs.recommended] },
  { files: ['src/**/*.{js,mjs,cjs,ts,mts,cts}'], languageOptions: { globals: globals.browser } },
  includeIgnoreFile(gitignorePath, '.gitignore'),
]);
