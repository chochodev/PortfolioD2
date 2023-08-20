/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
      },
    },
    variants: {
      extend: {
        display: ['group-hover'],
      }
    },
    fontFamily:{
      'open': ['Open Sans', 'sans-serif'],
      'inter': ['Inter Tight', 'sans-serif'],
      'lato': ['lato', 'helvetica'],
    },
    screens: {
      sm: "480px",
      md: "680px",
      mi_md: "720px",
      lg: "976px",
      xl: "1440px"
    },
    animation: {
      'mi-animate-spin-slow': 'spin 5s linear infinite',
    },
    extend: {
      colors: {
        surface: "#F5F4FC",
        darkSurface: "#001C30",
        
        onSurface: "#E03E1A",

        primary: "#64CCC5",
        secondary: "#176B87",

        textDark: "#001C30",
        textLight: "#94A3B8",

        linkColor: "#475569",
        linkHover: "#94A3B8",
      },
    },
  },
  plugins: [],
}
