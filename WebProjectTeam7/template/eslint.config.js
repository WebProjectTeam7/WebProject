import globals from 'globals'; // Import global variables for Node.js
import js from '@eslint/js'; // Import recommended ESLint configuration
import jsdoc from 'eslint-plugin-jsdoc'; // Import JSDoc plugin for ESLint

export default [
    {
        files: ['**/*.js'], // Apply these rules to all JavaScript files
        languageOptions: {
            ecmaVersion: 13, // Specify ECMAScript version
            sourceType: 'module', // Enable ES6 module syntax
            globals: globals.node, // Use Node.js global variables
        },
        plugins: {
            jsdoc, // Register the JSDoc plugin
        },
        rules: {
            ...js.configs.recommended.rules, // Include recommended ESLint rules
            ...jsdoc.configs.recommended.rules, // Include recommended JSDoc rules
            'max-len': ['error', { // Enforce maximum line length
                'code': 130, // Maximum length of 80 characters
                'tabWidth': 4, // Tab width is considered as 4 characters
                'ignoreComments': true, // Ignore comments in length check
                'ignoreTrailingComments': true, // Ignore trailing comments
                'ignoreUrls': true, // Ignore URLs in length check
                'ignoreStrings': true // Ignore strings in length check
            }],
            'object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside braces
            'quotes': ['error', 'single'], // Enforce single quotes for strings
            'quote-props': 'off', // Do not enforce quoting of property names
            'complexity': ['error', 15], // Enforce a maximum cyclomatic complexity of 15
            'consistent-return': 'error', // Require consistent return statements
            'default-case': 'error', // Require default case in switch statements
            'dot-notation': 'error', // Encourage dot notation
            'eqeqeq': 'error', // Require === and !==
            'func-style': ['error', 'expression'], // Enforce function expressions
            'no-alert': 'error', // Disallow alert, confirm, and prompt
            'no-div-regex': 'error', // Disallow division operators explicitly at the beginning of regular expressions
            'no-else-return': 'error', // Disallow else blocks after return statements in if statements
            'no-labels': 'error', // Disallow labeled statements
            'no-eq-null': 'error', // Disallow null comparisons without type-checking operators
            'no-eval': 'error', // Disallow eval()
            'no-floating-decimal': 'error', // Disallow leading or trailing decimal points in numeric literals
            'no-implied-eval': 'error', // Disallow the use of eval()-like methods
            'no-iterator': 'error', // Disallow the use of the __iterator__ property
            'no-lone-blocks': 'error', // Disallow unnecessary nested blocks
            'no-loop-func': 'error', // Disallow function declarations and expressions inside loop statements
            'no-new': 'error', // Disallow new operators outside of assignments or comparisons
            'no-new-func': 'error', // Disallow new operators with the Function object
            'no-proto': 'error', // Disallow the use of the __proto__ property
            'no-return-assign': 'error', // Disallow assignment operators in return statements
            'no-script-url': 'error', // Disallow javascript: urls
            'no-self-compare': 'error', // Disallow comparisons where both sides are exactly the same
            'no-sequences': 'error', // Disallow comma operators
            'no-unused-expressions': 'error', // Disallow unused expressions
            'no-undef-init': 'error', // Disallow initializing variables to undefined
            'no-undefined': 'error', // Disallow the use of undefined as an identifier
            'no-unused-vars': 'warn', // Warn about variables that are declared but not used
            'indent': ['error', 4], // Enforce consistent indentation of 2 spaces
            'keyword-spacing': ['error', { 'before': true, 'after': true }], // Require space before and after keywords
            'space-before-blocks': ['error', 'always'], // Require space before blocks
            // 'space-before-function-paren': ['error', 'never'], // Disallow space before function parentheses
            'space-in-parens': ['error', 'never'], // Disallow space inside parentheses
            'space-infix-ops': ['error', { 'int32Hint': false }], // Require spacing around infix operators
            'space-unary-ops': ['error', { 'words': true, 'nonwords': false }], // Enforce spacing before/after unary operators
            'spaced-comment': ['error', 'always', { 'exceptions': ['-', '+'] }] // Require space after // or /* in comments
        },
    },
];
