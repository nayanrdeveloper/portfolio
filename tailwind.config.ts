import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './node_modules/flowbite-react/lib/**/*.js',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
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
                background: 'var(--background)',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
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
                'primary-pink': 'var(--primary-pink)',
                'secondary-gray': 'var(-secondary-gray)',
                gray: 'var(--gray)',
            },
            backgroundImage: {
                'light-card-gradient':
                    'linear-gradient(145deg, #e2e8ec, #ffffff)',
                'dark-button-gradient':
                    'linear-gradient(145deg, #1e2024, #23272b)',
                'primary-pink': 'var(--primary-pink)',
                'primary-dark-gradient': 'var(--background)',
                'progress-gradient-light': 'linear-gradient(145deg, #fff 0%, #ff014f 100%)',
                'progress-gradient-dark': 'linear-gradient(145deg, #f02981 0%, #c81901 100%)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            boxShadow: {
                'card-light': '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
                'card-dark': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
export default config;
