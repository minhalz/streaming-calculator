import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Streaming Services Calculator',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxt/postcss8',
        '@nuxt/image',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@pinia/nuxt'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },

    bridge: {
        vite: true,
    },

    vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
    },

    image: {
        domains: ['drive.google.com'],
    },
})
