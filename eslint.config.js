// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['src/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          /** Whether to ignore function parameters. */
          ignoreParameters: true,
          /** Whether to ignore class properties. */
          ignoreProperties: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/no-explicit-any': ['error'],
      '@angular-eslint/no-empty-lifecycle-method': ['error'],
      '@typescript-eslint/typedef': [
        'error',
        {
          propertyDeclaration: true, // Require types on class properties
          memberVariableDeclaration: true, // Require types on member variables
          variableDeclaration: false, // Optional for local variables
          parameter: true, // Require types on parameters
        },
      ],
    },
  },
  {
    files: ['src/**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      // 'max-len': ['error', { code: 120 }],
    },
  }
);
