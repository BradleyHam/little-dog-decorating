import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'brand-blue': '#0F122F',
        'brand-orange': '#E68C2C',
        'light-background': '#F5F5F7',
      }, 
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],  // Ensuring Poppins is the first fallback
        'lato': ['Lato', 'sans-serif'],         // Ensuring Lato is the first fallback
      },
    },
  }
};
export default config;

