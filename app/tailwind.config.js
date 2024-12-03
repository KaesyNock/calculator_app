/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"integers": "#03269A",
				"operators": "#9A1903",
			},
			buttons: {
				"numbersButton": "bg-integers rounded text-white text-xl px-2 py-1",
				"operatorsButton": "bg-operators rounded text-white text-xl px-2 py-1",
			},
		},
	},
	plugins: [],
};
