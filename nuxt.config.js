import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    meta: {
        title: 'Streaming Services Calculator',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content:
                    "Select all your current streaming services to find out how much you're spending monthly and yearly.",
            },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss', '@pinia/nuxt'],

    tailwindcss: {
        cssPath: '@/assets/scss/main.scss',
    },

    vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
    },
})
