/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
				'custom-lg': '0 10px 15px rgba(0, 0, 0, 0.25)',
			}
		}
	},
	plugins: [],
}
