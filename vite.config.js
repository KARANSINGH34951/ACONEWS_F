import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/news': {
        target: 'https://aconews-seuh.onrender.com/',
        changeOrigin: true,
      },
      '/search': {
        target: 'https://aconews-seuh.onrender.com/',
        changeOrigin: true,
      },
      '/suggestions': {
        target: 'https://aconews-seuh.onrender.com/',
        changeOrigin: true,
      },
    }
  },
  plugins: [react()],
})
