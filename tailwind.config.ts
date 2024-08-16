import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./models/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        viewHight: "575px",
      },
      minHeight: {
        viewHeight: "575px",
      },
      colors: {
        "brand-primary": "#CDAAFF",
        "brand-black": "#0C0D10",
      },
      backgroundImage: {
        "brand-gradient":
          "radial-gradient(circle, rgba(34,39,55,1) 0%, rgba(12,13,16,0) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
