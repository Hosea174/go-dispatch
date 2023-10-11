import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  plugins: ["@astro/plugin-sass"],
  site: "https://www.godispatch.io/",
  integrations: [sitemap(), robotsTxt()]
});