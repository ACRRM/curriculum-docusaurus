const path = require('path');

module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "Resources",
      logo: {
        alt: "ACRRM Logo",
        src: "img/ACRRM_logo_minimal.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "tel:1800223226",
          label: "📞 1800 223 226",
          position: "right",
        },
      ],
    },
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     '🚧 Pardon us, we are currently revamping our documents',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   // textColor: '#091E42', // Defaults to `#000`.
    // },
    footer: {      
      logo: { src: 'img/ACRRM_logo.svg', alt: '' },
      style: "dark",
      copyright: `Copyright ©${new Date().getFullYear()} <br /> ABN: 12 078 081 848 <br /> Built with ☕ & ❤ in <a href="https://youtu.be/52ZPlDSmEj4?t=139">Brisvegas</a>`,
    },
  },
  plugins: [path.resolve(__dirname, './node_modules/docusaurus-lunr-search/')],
  // plugins: ['docusaurus-plugin-auto-sidebars'],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.auto.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ACRRM/curriculum-docusaurus/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
