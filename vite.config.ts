import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
        build: {
                lib: {
                        entry: resolve('./src/index.ts'),
                        name: 'NovelScriptJS',
                        formats: ['es', 'umd'],
                },
                target: 'ES2020',
                sourcemap: true,
                minify: false,
                emptyOutDir: false,
        },
        resolve: {
                alias: {
                        '@': resolve('./src'),
                        '@wasm': resolve('./src/wasm'),
                },
        },
})
