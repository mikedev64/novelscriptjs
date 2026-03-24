export default defineConfig({
        env: {
                browser: true,
                es2020: true,
                node: true,
        },
        extends: ['eslint:recommended'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
        },
        plugins: ['@typescript-eslint'],
        rules: {
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-explicit-any-in-catch': 'error',
                '@typescript-eslint/explicit-function-return-types': 'warn',
                '@typescript-eslint/explicit-member-accessibility': [
                        'warn',
                        {
                                accessibility: 'explicit',
                                overrides: {
                                        constructors: 'off',
                                },
                        },
                ],
                'no-console': 'warn',
                indent: ['error', 8],
        },
        overrides: [
                {
                        files: ['*.ts', '*.tsx'],
                        parserOptions: {
                                project: './tsconfig.json',
                        },
                },
        ],
})
