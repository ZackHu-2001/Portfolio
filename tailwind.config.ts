import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'box-shadow': 'rgba(0, 0, 0, 0.1)',
        'box-shadow-dark': 'rgba(255, 255, 255, 0.9)',
        'bg': '#f9f9f9',
        'bg-dark': '#1a1a1a',
        'text-color': '#555',
        'text-color-dark': '#f9f9f9',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
