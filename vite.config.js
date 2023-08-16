import dts from 'vite-plugin-dts'
export default {
    build: {
        outDir: 'dist',
        lib: {
            entry: 'src/index.ts',
            name: 'ScrollSpy',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        }
    },
    plugins: [dts()]
}
