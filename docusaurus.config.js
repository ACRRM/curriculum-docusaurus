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
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "tel:1800223226",
          label: "📞 1800 223 226",
          position: "right",
        },
      ],
    },
    footer: {      
      logo: { src: 'img/ACRRM_logo.svg', alt: '' },
      style: "dark",
      // links: [
      //   {
      //     title: "ACRRM",
      //     items: [
      //       {
      //         label: "Contact Us",
      //         href: "https://mycollege.acrrm.org.au/contact-us",
      //       },
      //       {
      //         label: "Privacy",
      //         href: "https://www.acrrm.org.au/privacy",
      //       },
      //       {
      //         label: "Terms of Use",
      //         href: "https://www.acrrm.org.au/terms-of-use",
      //       },
      //       {
      //         label: "Website Tips",
      //         href: "https://www.acrrm.org.au/website-tips",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Connect@ACRRM",
      //         href: "https://connect.acrrm.org.au/",
      //       },
      //       {
      //         label: "Facebook",
      //         href: "https://www.facebook.com/ACRRM4ruralhealth/",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/ACRRM",
      //       },
      //       {
      //         label: "Instagram",
      //         href: "https://www.instagram.com/the_acrrm/",
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright ©${new Date().getFullYear()} <br /> ABN: 12 078 081 848 <br /> Built with ☕ & ❤ in <a href="https://youtu.be/52ZPlDSmEj4?t=139">Brisvegus</a>`,
    },
  },
  plugins: ['docusaurus-plugin-auto-sidebars'],
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
          editUrl: "https://github.com/ACRRM/curriculum-docusaurus",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
