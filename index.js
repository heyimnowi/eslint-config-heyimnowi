'use strict';

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'promise',
        'react-hooks',
        'react',
        'testing-library'
],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:promise/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'prettier',
    ],
    rules: {
        'no-console': 'error',
        'no-debugger': 'error',
    },
};
