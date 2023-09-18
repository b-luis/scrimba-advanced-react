/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				default: "#4D4D4D",
				active: "#161616"
			},
			backgroundImage: {
				"hero-landing": "url('./src/images/background/mountain-bg.png')"
			}
		}
	},
	plugins: []
};
