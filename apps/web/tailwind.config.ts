import type { Config } from "tailwindcss";
import sharedConfig from "@repo/design-system/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./app/**/*.tsx",
    "./src/**/*.tsx",
    "../../packages/design-system/components/**/*.tsx",
  ],
  presets: [sharedConfig],
};

export default config;
