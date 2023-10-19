/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: "#F1F4FF",
          100: "#D2DCFE",
          200: "#BCCBFD",
          300: "#9EB3FC",
          400: "#8BA4FC",
          500: "#6E8DFB",
          600: "#6480E4",
          700: "#4E64B2",
          800: "#3D4E8A",
          900: "#2E3B69"
        },
        secondary: {
          50: "#E6E6E6",
          100: "#B0B0B0",
          200: "#8A8A8A",
          300: "#545454",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000"
        },
        warning: {
          50: "#FFE6E6",
          100: "#FFB0B0",
          200: "#FF8A8A",
          300: "#FF5454",
          400: "#FF3333",
          500: "#FF0000",
          600: "#E80000",
          700: "#B50000",
          800: "#8C0000",
          900: "#6B0000"
        },
        success: {
          50: "#EAFEEA",
          100: "#BFFCBF",
          200: "#A0FBA0",
          300: "#75F975",
          400: "#5AF85A",
          500: "#31F631",
          600: "#2DE02D",
          700: "#23AF23",
          800: "#1B871B",
          900: "#156715"
        }
      },
      fontSize: {
        xxs: ["8px", {lineHeight:"10px"}],
        xs: ["11px", { lineHeight: "13.2px" }],
        sm: ["12px", { lineHeight: "14.4px" }],
        base: ["14px", { lineHeight: "16.8px" }],
        lg: ["16px", { lineHeight: "19.2px" }],
        h6: ["18px", { lineHeight: "21.6px" }],
        h5: ["20px", { lineHeight: "24px" }],
        h4: ["22px", { lineHeight: "26.4px" }],
        h3: ["25px", { lineHeight: "30px" }],
        h2: ["28px", { lineHeight: "33.6%" }],
        h1: ["32px", { lineHeight: "38.4%" }],
      },
      fontFamily: {
        roboto:['Roboto', 'sans']
      }
    },
  },
  plugins: [],
}
