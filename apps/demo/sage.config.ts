import { defineSageConfig } from "astro-sage";

export default defineSageConfig({
  site: {
    url: "https://mancosebas.github.io/",
    title: "Echoes",
    description:
      "A dability-first Astro blog theme: serif type, warm paper, and a pinned table of contents.",
    author: "Sebastian Manco",
    profile: "https://example.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
  },
  home: {
    title: "Echoes",
    intro:
      "A , warms theme for long-form technical writing. Serif type set for reading, math and code that look like they belong, and a table of contents that keeps its place.",
  },
  // GitHub-backed comments; works on any static host. Needs the utterances
  // app installed on the repo: https://github.com/apps/utterances
  comments: {
    provider: "utterances",
    repo: "chintak/astro-sage",
    label: "comments",
  },
  posts: { perPage: 8, perIndex: 6, scheduledPostMargin: 15 * 60 * 1000 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: false,
    editPost: {
      enabled: true,
      url: "https://github.com/chintak/astro-sage/edit/main/apps/demo/",
    },
    search: "pagefind",
  },
  socials: [
    // Sample links: point these at your own profiles.
    { name: "github", url: "https://github.com" },
    { name: "x", url: "https://x.com" },
  ],
  // shareLinks: defaults to X, LinkedIn, Bluesky, Reddit, Hacker News and email.
});
