import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/vue-simple-library/',
    mode,
    publicDir: "../public",
    build: {
        outDir: "../dist",
        assetsDir: "./"
    }
})
