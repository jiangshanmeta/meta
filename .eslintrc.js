module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'standard',
    ],
    rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        indent: [
            'error', 4,
        ],
        'comma-dangle': [
            'error', {
                arrays: 'always',
                objects: 'always',
                imports: 'always',
                exports: 'always',
                functions: 'never',
            },
        ],
        'no-redeclare': 'off',
        'no-unmodified-loop-condition': 'off',
        'array-bracket-spacing': 'off',
        'array-bracket-newline': 'off',
        'object-curly-newline': 'off',
        'object-property-newline': [
            'error', {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        semi: [
            'error', 'always',
        ],
        'standard/no-callback-literal': 'off',
        camelcase: 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
