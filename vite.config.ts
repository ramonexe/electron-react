import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Para que o Electron consiga encontrar os assets
  build: {
    // O Electron precisa diferenciar o arquivo de build já que ele também gera um dist
    outDir: 'dist-react',
  }
})
