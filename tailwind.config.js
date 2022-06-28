/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0058ab',
                'primary-green': '#07A978',
                secondary: '#00abe1',
                tertiary: '#FFCC70',
                'background-light': '#ffffff',
                'background-dark': '#1E293B',
                'txt-light': '#ffffff',
                'txt-dark': '#000000',
            },
            height: {
                '80vh': '80vh'
            },

        },
    },
    plugins: [],
}