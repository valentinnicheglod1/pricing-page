/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'xxs': '275px',
            'xs': '320px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                purple: "#6057ED",
                green: "#64BC26",
                dark: "#01010D",
                white: "#FBFAFF",
            },
        },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
};
