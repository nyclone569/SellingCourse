import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// vite.config.js

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Add this line for relative paths
  // server: {
  //   proxy: {
  //     '/api': 'https://course.spacedev.vn', 
  //   },
  // },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['antd', '@ant-design/icons'],
          utils: ['axios', 'moment']
        }
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
