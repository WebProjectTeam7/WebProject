import globals from 'globals';
import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    files: ['**/*.js'], // Apply to all JS files
    languageOptions: {
      ecmaVersion: 13,
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      jsdoc, // Register the jsdoc plugin
    },
    rules: {
      ...js.configs.recommended.rules, // Recommended ESLint rules
      ...jsdoc.configs.recommended.rules, // Recommended JSDoc rules
      'max-len': ['error', {
        'code': 80,
        'tabWidth': 4,
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true
      }],
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single'],
      'quote-props': 'off',
      'complexity': ['error', 15],
      'consistent-return': 'error',
      'default-case': 'error',
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'func-style': ['error', 'arrow'],
      'no-alert': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-labels': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-floating-decimal': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-unused-expressions': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'error',
      'no-unused-vars': 'warn'
    },
  },
];
