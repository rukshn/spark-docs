import { defineConfig } from "vitepress";
import { createContentLoader } from "vitepress";
import fs from "fs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spark Editor Docs",
  description: "Documentation for the Spark Editor",
  base: "/",
  sitemap: {
    hostname: "https://docs.thespark.dev",
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
      { text: "The Spark Editor", link: "https://thespark.dev" },
    ],
    logo: "/logo.svg",
    logoLink: "https://docs.thespark.dev",
    sidebar: [
      {
        text: "Introduction",
        link: "/",
        items: [
          { text: "What is Spark Editor?", link: "/" },
          { text: "Getting started", link: "/getting-started" },
          { text: "Key concepts", link: "/key-concepts" },
        ],
      },
      {
        text: "Project",
        link: "/projects",
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
            text: "CodeSystem and concepts",
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
            text: "Introduction to the editor",
            link: "/editor/",
          },
          {
            text: "Writing CQL in the editor",
            link: "/editor/writing-cql",
          },
          {
            text: "Graph Mode",
            link: "/editor/graph-mode",
          },
          {
            text: "Navigate between CQL",
            link: "/editor/navigate-between-cql",
          },
          {
            text: "Export CQL as a FHIR library",
            link: "/editor/export-cql-as-fhir-library",
          },
        ],
      },
    ],
    footer: {
      message:
        "AI models are used for generating parts of the documentation and validated before publication. If you find any inconsistency please file a bug on GitHub",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/rukshn" }],
  },
});
