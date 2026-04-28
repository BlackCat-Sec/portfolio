import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const normalizeBase = (value) => {
  if (!value || value === "/") {
    return "/";
  }

  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return `/${trimmed}/`;
};

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "serve" ? "/" : normalizeBase(process.env.VITE_BASE_PATH),
}));
