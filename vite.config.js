import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import dsv from '@rollup/plugin-dsv';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                exportType: 'default',
                ref: true,
                svgo: false,
                titleProp: true,
            },
            include: '**/*.svg',
        }),
        dsv(),
    ],
    build: {
        sourcemap: true,
    },
    server: {
        open: true,
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
    },
});
