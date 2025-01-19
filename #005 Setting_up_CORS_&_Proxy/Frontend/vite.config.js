/*
   Proxy Server is a server that acts as an intermediary between a client and
   other servers.
   It can be used for very purposes, including load balancing, security, and caching.
*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// setting up a Proxy in Vite module bundler
// server.proxy option is used to setup a proxy server to forward requests from Vite dev server to a target server.
// This allows us to bypass CORS restrictions by making requests to our local dev server instead of target server.
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  plugins: [react()],
})
