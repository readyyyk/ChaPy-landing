import svgToDataUri from 'mini-svg-data-uri';
import type { Config } from 'tailwindcss';
// @ts-expect-error its a valid import
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                inWhite: {
                    from: {
                        backgroundColor: '#ffffff00',
                    },
                    '35%': {
                        backgroundColor: '#ffffff00',
                    },
                    '45%': {
                        backgroundColor: '#ffffff',
                    },
                    '55%': {
                        backgroundColor: '#ffffff',
                    },
                    '65%': {
                        backgroundColor: '#ffffff00',
                    },
                    to: {
                        backgroundColor: '#ffffff00',
                    },
                },
                moveX: {
                    from: {
                        left: '0',
                    },
                    to: {
                        left: '85%',
                    },
                },
                moveY: {
                    from: { top: '0' },
                    to: { top: '60%' },
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },

                'feature-text': {
                    from: {
                        opacity: '0',
                        left: '0',
                    },
                    '14%': {
                        opacity: '1',
                        left: '10%',
                    },
                    '32%': {
                        opacity: '1',
                        left: '10%',
                    },
                    '46%': {
                        opacity: '0',
                        left: '38%',
                    },
                    '80%': {
                        opacity: '0',
                        left: '38%',
                    },
                    '88%': {
                        opacity: '1',
                        left: '38%',
                    },
                    to: {
                        opacity: '0',
                        left: '0',
                    },
                },
                'feature-aes': {
                    from: {
                        opacity: '0',
                        right: '0',
                    },
                    '14%': {
                        opacity: '0',
                        right: '0',
                    },
                    '28%': {
                        // enter
                        opacity: '1',
                        right: '10%',
                    },
                    '32%': {
                        opacity: '1',
                        right: '10%',
                    },
                    '46%': {
                        opacity: '0',
                        right: '20%',
                    },
                    '60%': {
                        opacity: '0',
                        right: '0%',
                    },
                    '68%': {
                        opacity: '1',
                        right: '10%',
                    },
                    '82%': {
                        opacity: '0',
                        right: '20%',
                    },
                    to: {
                        opacity: '0',
                        right: '0',
                    },
                },

                'feature-bin': {
                    from: {
                        opacity: '0',
                        left: '40%',
                    },
                    '46%': {
                        opacity: '0',
                        left: '40%',
                    },
                    '52%': {
                        opacity: '1',
                        left: '40%',
                    },
                    '60%': {
                        opacity: '1',
                        left: '10%',
                    },
                    '62%': {
                        opacity: '1',
                        left: '10%',
                    },
                    '68%': {
                        opacity: '1',
                        left: '10%',
                    },
                    '82%': {
                        opacity: '0',
                        left: '38%',
                    },
                    to: {
                        opacity: '0',
                        left: '40%',
                    },
                },

                in: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                out: {
                    from: { opacity: '1' },
                    to: { opacity: '0' },
                },
                scroll: {
                    to: {
                        transform: 'translate(calc(-50% - 0.5rem))',
                    },
                },
            },
            animation: {
                'real-bounce':
                    'moveX 4s linear infinite alternate, moveY 3s linear infinite alternate',
                'real-bounce-1':
                    'moveX 5s linear infinite alternate, moveY 4s 3s linear infinite alternate',
                'real-bounce-2':
                    'moveX 4.5s linear infinite alternate, moveY 4s 1s linear infinite alternate',
                'real-bounce-3':
                    'moveX 3.5s linear infinite alternate, moveY 3.5s 1s linear infinite alternate',

                'feature-text': 'feature-text 10s infinite',
                'feature-aes': 'feature-aes 10s infinite',
                'feature-bin': 'feature-bin 10s infinite',

                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',

                'in-white':
                    'inWhite var(--animation-duration, 2s) linear var(--animation-delay, 0s) infinite',
                hidenseek: 'in 1s ease-in infinite alternate',
                hidenseek2: 'in 1s 1s ease-in infinite alternate',
                scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('tailwind-scrollbar-hide'),
        // @ts-expect-error its a valid config
        function ({ matchUtilities, theme }) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            matchUtilities(
                {
                    'bg-grid': (value: string) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    'bg-grid-small': (value: string) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="10.5" height="10.5" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    'bg-dot': (value: string) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
                        )}")`,
                    }),
                },
                {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
                    values: flattenColorPalette(theme('backgroundColor')),
                    type: 'color',
                },
            );
        },
    ],
} satisfies Config;

export default config;
