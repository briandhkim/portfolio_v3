/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				highlight: colors.indigo,
			},
			fontFamily: {
				sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
				serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
				mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
			},
			keyframes: {
				fade_in: {
					'0%': { opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				fade_in: 'fade_in 1s ease-in-out',
				fade_in_slow: 'fade_in 1.5s ease-in',
				fade_in_slower: 'fade_in 2s ease-in',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
