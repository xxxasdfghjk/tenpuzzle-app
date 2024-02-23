import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const REPOSITORY = "tenpuzzle-app";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: `/${REPOSITORY}/`,
});
