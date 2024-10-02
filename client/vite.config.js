import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  
    plugins: [react()],
   
    build: {
      
        rollupOptions: {
          output: {
            manualChunks(id) {
              // Split node_modules into separate chunks
              if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
            },
          },
        },
        chunkSizeWarningLimit: 1500, // Set a higher limit for chunk size warnings if needed
      },
    });
