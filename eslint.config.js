import { defineConfig } from 'eslint/config';

export default defineConfig([
  eslintConfigESLint, // Example of using a shared configuration package
  {
    // Your custom overrides and configurations
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      'prefer-const': 'warn',
      'no-constant-binary-expression': 'error',
      // Add or override more rules here
    },
    // Other configuration properties like languageOptions, plugins, etc.
  },
]);
