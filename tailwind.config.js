const production = !process.env.ROLLUP_WATCH;
module.exports = {
    content: ['./src/**/*.svelte'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#fff',
                    200: '#ddd',
                    300: '#aaa',
                    400: '#888',
                    500: '#666',
                    600: '#444',
                    700: '#222',
                    800: '#151515',
                    900: '#000',
                    main: '#fff',
                },
                secondary: {
                    100: '#d9d7ec',
                    200: '#c0bddf',
                    300: '#a6a3d2',
                    400: '#7771bd',
                    500: '#5a53ac',
                    600: '#4c4791',
                    700: '#3e3a77',
                    800: '#302d5c',
                    900: '#151328',
                    main: '#151328',
                },
                accent: {
                    100: '#eef9d7',
                    200: '#e2f5ba',
                    300: '#ddf4b0',
                    400: '#d9f2a6',
                    500: '#d5f19c',
                    600: '#aac17d',
                    700: '#80915e',
                    800: '#6b794e',
                    900: '#55603e',
                    main: '#d5f19c',
                },
            },
            keyframes: {
                loading: {
                    '0%': {
                        top: '8px',
                        height: '64px',
                    },
                    '50%, 100%': {
                        top: '24px',
                        height: '32px',
                    },
                },
            },
            animation: {
                loading: 'loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite',
            },
        },
    },
    plugins: [],
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
};
