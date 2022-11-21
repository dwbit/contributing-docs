// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bitwarden Contributing Documentation",
  url: "https://contributing.bitwarden.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/bitwarden/developer-docs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Contributing Docs",
        logo: {
          alt: "Bitwarden Logo",
          src: "img/logo-horizontal.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            type: "docSidebar",
            position: "left",
            label: "Contributing",
            sidebarId: "contributing",
          },
          {
            type: "docSidebar",
            position: "left",
            label: "Architecture",
            sidebarId: "architecture",
          },
          {
            href: "https://github.com/bitwarden",
            label: "GitHub",
            position: "right",
          },
          {
            type: "custom-dev",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Help Using Bitwarden",
            items: [
              {
                label: "Help Center",
                href: "https://bitwarden.com/help/",
              },
              {
                label: "Learning Center",
                href: "https://bitwarden.com/learning/",
              },
              {
                label: "Community Help",
                href: "https://community.bitwarden.com/c/support",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Community Forums",
                href: "https://community.bitwarden.com/",
              },
              {
                label: "Gitter",
                href: "https://gitter.im/bitwarden/Lobby",
              },
              {
                label: "Reddit",
                href: "https://reddit.com/r/bitwarden",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Business",
                href: "https://bitwarden.com/",
              },
              {
                label: "Careers",
                href: "https://bitwarden.com/careers/",
              },
              {
                label: "GitHub",
                href: "https://github.com/bitwarden",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitwarden Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "powershell"],
      },
    }),
};

module.exports = config;