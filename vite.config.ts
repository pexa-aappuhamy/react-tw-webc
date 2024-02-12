import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies, dependencies } from './package.json';
import { viteStaticCopy } from 'vite-plugin-static-copy'

const isWebc = process.argv.includes('webc');
const addFonts = viteStaticCopy({
  targets: [
    {
      src: 'fonts',
      dest: ''
    }
  ]
});
export default defineConfig({
  plugins: isWebc ? [react(),addFonts] : [react(),dts({exclude: ['**/*.wc.tsx'], insertTypesEntry: true}),tsconfigPaths(),addFonts],
  build: {
    outDir: isWebc ? 'build-wc' : 'build',
    lib: {
      entry: isWebc ? resolve(__dirname, 'src', 'index.wc.ts') : resolve(__dirname, 'src', 'index.ts'),
      name: 'react-tw-webc',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: isWebc ? {
      output: { 
        preserveModules: false, 
        exports: 'named',
      }
    }:{
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies).filter(key => key !== '@mui/base')],
      output: { preserveModules: false, exports: 'named' }
    },
    target: 'esnext',
    sourcemap: false
  },
  define: {
    'process.env': {}
  }
})
