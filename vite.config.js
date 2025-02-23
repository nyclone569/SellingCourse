import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// vite.config.js

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/elearning/v4/courses': 'https://course.spacedev.vn', 
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
