/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            boxShadow: {
                '3d': `-10px -10px 15px rgba(0,0,0, .3),
                        10px 10px 15px rgba(0,0,0, .3)`
            },
            container: {
                padding: '1.5rem',
                center: true,
            },
            screens: {
                xs: '400px',
                sm: '480px',
                md: '768px',
                mmd: '948px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                primary: '#0058ab',
                'primary-green': '#07A978',
                secondary: '#00abe1',
                tertiary: '#FFCC70',
                'background-light': '#ffffff',
                'background-light-2': '#cccccc',
                'light-container': '#ffffff',
                'background-dark': '#171521',
                'background-dark-2': '#192C43',
                'dark-container': '#192C43',
                'txt-light': '#ffffff',
                'txt-dark': '#000000',
            },
            height: {
                '80vh': '80vh',
            },
            maxHeight: {
                '3/4': '75vh',
            }

        },
    },
    plugins: [],
}