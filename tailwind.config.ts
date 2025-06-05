import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				arcade: ['Orbitron', 'sans-serif'],
				sans: ['Quicksand', 'Roboto', 'sans-serif'],
				quicksand: ['Quicksand', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				game4all: {
					purple: '#9b87f5',
					blue: '#33C3F0',
					pink: '#D946EF',
					dark: '#1A1F2C',
					light: '#f1f0fb'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #9b87f5, 0 0 20px #9b87f5, 0 0 25px #9b87f5'
					},
					'50%': {
						textShadow: '0 0 5px #fff, 0 0 10px #33C3F0, 0 0 15px #33C3F0, 0 0 20px #33C3F0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(155, 135, 245, 0.8))' },
					'50%': { filter: 'drop-shadow(0 0 12px rgba(217, 70, 239, 0.8))' }
				},
				'flicker': {
					'0%': { opacity: '0' },
					'19.999%': { opacity: '0' },
					'20%': { opacity: '0.2' },
					'20.001%': { opacity: '0' },
					'40%': { opacity: '0' },
					'40.001%': { opacity: '0.1' },
					'40.002%': { opacity: '0' },
					'60%': { opacity: '0' },
					'60.001%': { opacity: '0.3' },
					'60.002%': { opacity: '0' },
					'70%': { opacity: '0' },
					'70.001%': { opacity: '0.2' },
					'70.002%': { opacity: '0' },
					'90%': { opacity: '0' },
					'90.001%': { opacity: '0.3' },
					'90.002%': { opacity: '0' },
					'100%': { opacity: '0' },
				},
				'blinking-cursor': {
					'0%': { opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' },
				},
				'scan': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'flicker': 'flicker 8s infinite',
				'blinking-cursor': 'blinking-cursor 1s infinite',
				'scanline': 'scanline 8s linear infinite',
				'scan': 'scan 4s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
