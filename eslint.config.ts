import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  tseslint.configs.recommended,
  { ignores: ["dist"] },
  {
    rules: {
      "@typescript-eslint/no-unsafe-function-type": "off",
      "prefer-rest-params": "off",
    },
  },
]);
