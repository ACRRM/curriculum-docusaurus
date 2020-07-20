const path = require("path");

module.exports = {
  title: "ACRRM Curriculum",
  url: "https://acrrm-curriculum.netlify.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "ACRRM",
  projectName: "curriculum",
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      // title: "Resources",
      logo: {
        alt: "ACRRM Logo",
        src: "img/ACRRM_logo.svg",
      },
      links: [
        {
          href: "tel:1800223226",
          label: "📞 1800 223 226",
          position: "right",
        },
      ],
    },
    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        '🚧 <b>This prototype is not complete and has limited functionality.</b> <br /> Please visit <a href="https://acrrm.org.au/resources" target="_blank" rel="noopener noreferrer">our main website</a> for up-to-date information',
      backgroundColor: "#00bfe9",
      // backgroundColor: '#fafbfc', // Defaults to `#fff`.
      // textColor: '#091E42', // Defaults to `#000`.
    },
    footer: {
      logo: {
        src: "img/ACRRM_logo.svg",
        alt: "ACRRM logo",
        href: "https://acrrm.org.au",
      },
      copyright: `Copyright ©${new Date().getFullYear()} <br /> ABN: 12 078 081 848 <br /> Built with ☕ & ❤ in <a href="https://youtu.be/52ZPlDSmEj4?t=139">Brisvegas</a>`,
    },
  },
  plugins: [
    path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/"),
    "docusaurus-plugin-sass",
  ],
  // plugins: ['docusaurus-plugin-auto-sidebars'],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.auto.js"),
          // Please change this to your repo.
          editUrl: "",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
