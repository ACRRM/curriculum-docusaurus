const path = require("path");

module.exports = {
  title: "ACRRM Curriculum",
  url: "https://curriculum.acrrm.org.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "ACRRM",
  projectName: "curriculum",
  onBrokenLinks: "warn",
  scripts: [
    {
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      async: true
    },
    {
      src: "/netlifyIdentity.js",
      defer: true
    }
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true
    },
    navbar: {
      hideOnScroll: true,
      title: "",
      logo: {
        alt: "ACRRM Logo",
        src: "img/ACRRM_logo.svg"
      },
      items: [
        {
          href: "https://mycollege.acrrm.org.au/contact-us",
          label: "Contact",
          position: "right"
        }
      ]
    },
    googleAnalytics: {
      trackingID: "UA-11311405-8"
    },
    gtag: {
      trackingID: "UA-11311405-8"
    },
    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        '🚧 <b>This prototype is not complete and has limited functionality.</b> <br /> Please visit <a href="https://www.acrrm.org.au/resources" target="_blank" rel="noopener noreferrer">our main website</a> for up-to-date information',
      backgroundColor: "#00bfe9"
      // backgroundColor: '#fafbfc', // Defaults to `#fff`.
      // textColor: '#091E42', // Defaults to `#000`.
    },
    footer: {
      logo: {
        src: "img/ACRRM_logo.svg",
        alt: "ACRRM logo",
        href: "https://acrrm.org.au"
      },
      copyright: `Copyright ©${new Date().getFullYear()} <br /> ABN: 12 078 081 848 <br /> Built with ☕ & ❤ in <a href="https://youtu.be/52ZPlDSmEj4?t=139">Brisvegas</a>`
    }
  },
  plugins: [
    // 'docusaurus-plugin-auto-sidebars',
    path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/"),
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/icons/icon-512x512.png"
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json"
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#e87500"
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes"
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000"
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/icons/icon-512x512.png"
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/icons/maskable_icon.png",
            color: "#e87500"
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/icons/icon-512x512.png"
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000"
          }
        ]
      }
    ]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.auto.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
          trailingSlash: false
        }
      }
    ]
  ]
};
