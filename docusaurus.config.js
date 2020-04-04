module.exports = {
  title: "RMUIF",
  tagline:
    "Supercharged version of Create React App with all the bells and whistles",
  url: "https://docs.rmuif.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "rmuif",
  projectName: "docs",
  themeConfig: {
    navbar: {
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-white.svg",
      },
      links: [
        {
          label: "Discord",
          href: "https://discord.gg/5Ann5C3",
          position: "right",
        },
        {
          label: "GitHub",
          href: "https://github.com/rmuif/web",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "getting-started",
            },
            {
              label: "Scripts",
              to: "scripts",
            },
            {
              label: "Roadmap",
              to: "roadmap",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/5Ann5C3",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/rmuif",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/rmuif/web",
            },
            {
              label: "Code of Conduct",
              href:
                "https://github.com/rmuif/web/blob/master/CODE_OF_CONDUCT.md",
            },
            {
              label: "Contributing",
              href: "https://github.com/rmuif/web/blob/master/CONTRIBUTING.md",
            },
            {
              label: "Security",
              href: "https://github.com/rmuif/web/blob/master/SECURITY.md",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RMUIF. This site is powered by <a href="https://www.netlify.com">Netlify</a>.`,
    },
    googleAnalytics: {
      trackingID: "UA-141052606-2",
    },
    image: "img/logo.png",
  },
  plugins: ["@docusaurus/plugin-google-analytics"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/rmuif/docs/edit/master",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: "",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
