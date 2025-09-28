import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base` to '/REPO/' when deploying under https://USER.github.io/REPO/
export default defineConfig({
  plugins: [react()],
  base: '/Cjbr-Mobilization_Calc_Tool/',
})