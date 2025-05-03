import { defineConfig } from "vitepress";
import { createContentLoader } from "vitepress";
import fs from "fs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CQL Editor Docs",
  description: "Documentation for CQL Editor",
  base: "/spark-docs/",
  sitemap: {
    hostname: "https://rukshn.github.io/spark-docs/",
  },
  async buildEnd() {
    const posts = await createContentLoader("./**/*.md", {
      transform(rawData) {
        // You can sort, filter, or map the data as needed
        return rawData
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date).getTime() -
              new Date(a.frontmatter.date).getTime()
          )
          .map((page) => ({
            url: page.url,
            title: page.frontmatter.title,
          }));
      },
    });
    fs.writeFile(
      "./postsjson.json",
      JSON.stringify(await posts.load()),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("✅ Posts json generated");
      }
    );
  },
  head: [["link", { rel: "icon", href: "/spark-docs/favicon.ico" }]],
  // https://vitepress.dev/reference/default-theme-config}]
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "CQL Editor", link: "https://cql.ruky.me" },
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
      {
        text: "Project",
        items: [
          {
            text: "What's a CQL project?",
            link: "/projects",
          },
          {
            text: "Managing your project",
            link: "/projects/managing-project",
          },
          {
            text: "Switching between projects",
            link: "/projects/switching-project",
          },
        ],
      },
      {
        text: "Terminology",
        items: [
          {
            text: "CodeSystem and Concepts",
            link: "/terminology/concepts/",
          },
          {
            text: "Managing your concepts",
            link: "/terminology/concepts/managing-concepts",
          },
        ],
      },
      {
        text: "Editor",
        link: "/editor",
        items: [
          {
            text: "Introduction to the Editor",
            link: "/editor/",
          },
          {
            text: "Writing CQL in the Editor",
            link: "/editor/writing-cql",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/rukshn" }],
  },
});
