/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.js',
        './nuxt.config.ts',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {},
    },
    plugins: [],
}
