/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-Sarif"],
        Poppins: ["Poppins", "sans-Sarif"],
        Inter: ["Inter", "sans-Sarif"],
        Ysabeau: ["Ysabeau", "sans-Sarif"],
        Sedan: ["Sedan", "sans-Sarif"],

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
