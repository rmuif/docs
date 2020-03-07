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
      title: "RMUIF",
      logo: {
        alt: "Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          label: "Spectrum",
          href: "https://spectrum.chat/rmuif",
          position: "right"
        },
        {
          label: "Discord",
          href: "https://discord.gg/5Ann5C3",
          position: "right"
        },
        {
          label: "GitHub",
          href: "https://github.com/rmuif/web",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started"
            },
            {
              label: "Scripts",
              to: "docs/scripts"
            },
            {
              label: "Roadmap",
              to: "docs/roadmap"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/rmuif"
            },
            {
              label: "Spectrum",
              href: "https://spectrum.chat/rmuif"
            },
            {
              label: "Discord",
              href: "https://discord.gg/5Ann5C3"
            }
          ]
        },
        {
          title: "Project",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/rmuif/web"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Linus Långberg`
    },
    googleAnalytics: {
      trackingID: "UA-141052606-2"
    },
    image: "img/logo.png"
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
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
