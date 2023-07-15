/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm': 576,
				'md': 768,
				'lg': 1024,
				'xl': 1400
			}
		},
	},
	plugins: [],
}
