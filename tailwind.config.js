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
      sm: "300px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        surface: "#DAFFFB",
        onSurface: "",
        primary: "#64CCC5",
        // primaryDark: "#EF7E3A",
        // primaryLight: "#fccc9f",
        secondary: "#176B87",
        // navyDark: "#344054",
        // navyLight: "#667085",
        // ash: "#CBCCE8",

        headerText: "#001C30",
        headerTextLight: "#52595f",
        linkColor: "#176B87",
        linkHover: "#52595f",
      }
    },
  },
  plugins: [],
}
