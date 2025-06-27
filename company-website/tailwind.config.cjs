/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "pulse-slow": "pulse 8s ease-in-out infinite",
                "pulse-slower": "pulse 12s ease-in-out infinite",
                "pulse-slowest": "pulse 16s ease-in-out infinite",
                "fadeInSlow": "fadeIn 4s ease-in-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};