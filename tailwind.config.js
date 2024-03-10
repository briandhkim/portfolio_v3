/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};