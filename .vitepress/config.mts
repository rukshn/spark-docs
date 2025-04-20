import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CQL Editor Docs",
  description: "Documentation for CQL Editor",
  base: "/spark-docs/",
  head: [["link", { rel: "icon", href: "/spark-docs/favicon.ico" }]],
  // https://vitepress.dev/reference/default-theme-config}]
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    logo: "/logo.svg",
    logoLink: "https://cql.ruky.me",
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is CQL Editor?", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
