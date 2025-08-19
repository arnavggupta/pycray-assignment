import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-cons": "url('/glow-cons.png')",
      },
    },
  },
  plugins: [],
};
export default config;
