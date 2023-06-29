import { defineConfig } from 'vite'
import { BrowserRouter, Link } from 'react-router-dom'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  base: "/", 
  
  
})
