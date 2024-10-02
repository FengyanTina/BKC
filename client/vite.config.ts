import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/BKC/',
  build: {
   
    rollupOptions: {
      output: {
        manualChunks(id: string) {
            // Split node_modules into separate chunks
            if (typeof id === 'string' && id.indexOf('node_modules') !== -1) {
              return id.split('node_modules/')[1].split('/')[0];
            }
          
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
})
