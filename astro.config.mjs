import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://wiki.extropy.sk",
  integrations: [
    starlight({
      title: "wiki.extropy.sk",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/extropysk",
        linkedin: "https://www.linkedin.com/company/extropysk",
        instagram: "https://instagram.com/extropy.sk",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["@fontsource/inter", "./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
