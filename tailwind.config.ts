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
        "light-blue": "#ABCEEB",
        "dark-blue": "#00406D",
        "light-yellow": "#FDF8D0",  
        "send-green": "#078700"       
      },
    },
  },
  plugins: [],
};
export default config;
