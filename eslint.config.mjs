import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
    rules: {
      camelcase: [
        'error',
        {
          properties: 'always',
          ignoreDestructuring: false,
          allow: ['^UNSAFE_'], // example exception
        },
      ],
      quotes: ['error', 'double', { avoidEscape: true }],
      // ^ always require "double quotes"
      // allow 'single quotes' only when escaping would be awkward
    },
  },
])
