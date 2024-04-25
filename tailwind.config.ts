import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'brown': '#b78d52',
        'lightBrown':'rgba(183, 141, 82, 0.7)',
        'purple':'#5f0f40',
        'lightPurple':'rgba(95, 15, 64, 0.6)',
        'lightWhite':'rgba(255, 255, 255,0.5)'
      },
      grayscale:{
        10: '10%'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
