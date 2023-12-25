/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-native/all',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-native'],
    root: true,
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        'react-native/react-native': true,
    },
    rules: {
        'react-native/split-platform-components': 'off',
    },
};
