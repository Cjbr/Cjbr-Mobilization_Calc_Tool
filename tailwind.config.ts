import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b1020",
        panel: "#121a30",
        border: "#2b3657",
        text: "#e8eefc",
        muted: "#8ea0c7",
        accent: "#4ea3ff",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.25)",
      },
      borderRadius: {
        xl2: "1rem",
      }
    },
  },
  plugins: [],
};
export default config;