/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				marker: ["Permanent Marker", "cursive"]
			},
			colors: {
				yellow: "#FEF3C7",
				red: "#FEE2E2"
			}
		}
	},
	plugins: []
};
