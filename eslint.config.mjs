import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import next from 'eslint-config-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat to bridge legacy configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Native ESLint recommended rules
  js.configs.recommended,

  // Next.js config using compat to adapt legacy configs
  ...compat.extends('eslint-config-next'),

  // Custom project rules
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      '@next/next/no-img-element': 'off', // Disabling the <img> warning
      'react/react-in-jsx-scope': 'off',  // Not needed in Next.js
    },
  },
];
