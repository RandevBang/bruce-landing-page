import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Bruce Brand Colors
        bruce: {
          primary: "rgb(19, 26, 70)",      // Primary navy
          secondary: "rgb(244, 120, 80)",   // Orange/coral
          accent: "rgba(19, 26, 70, 1)",    // Accent (same as primary)
          navy: {
            DEFAULT: "rgb(19, 26, 70)",
            50: "rgb(241, 242, 247)",       // Very light navy
            100: "rgb(223, 226, 239)",      // Light navy
            200: "rgb(187, 194, 223)",      // Medium light navy
            300: "rgb(151, 162, 207)",      // Medium navy
            400: "rgb(115, 130, 191)",      // Medium dark navy
            500: "rgb(79, 98, 175)",        // Dark navy
            600: "rgb(47, 66, 159)",        // Darker navy
            700: "rgb(31, 44, 118)",        // Very dark navy
            800: "rgb(23, 33, 89)",         // Darker
            900: "rgb(19, 26, 70)",         // Primary navy
            950: "rgb(15, 20, 56)",         // Darkest navy
          },
          orange: {
            DEFAULT: "rgb(244, 120, 80)",
            50: "rgb(254, 243, 238)",       // Very light orange
            100: "rgb(254, 231, 218)",      // Light orange
            200: "rgb(253, 207, 178)",      // Medium light orange
            300: "rgb(252, 183, 138)",      // Medium orange
            400: "rgb(251, 159, 98)",       // Medium dark orange
            500: "rgb(244, 120, 80)",       // Primary orange
            600: "rgb(234, 88, 45)",        // Dark orange
            700: "rgb(194, 65, 25)",        // Darker orange
            800: "rgb(154, 52, 20)",        // Very dark orange
            900: "rgb(124, 42, 16)",        // Darkest orange
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config