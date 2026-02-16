import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Agregá esta línea

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Y esta también
  ],
})