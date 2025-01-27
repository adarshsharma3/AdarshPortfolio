import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
