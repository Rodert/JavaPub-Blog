import { defineThemeConfig } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "http://javapub.net.cn/",

  author: {
    name: "Wang Shiyu",
    url: "http://javapub.net.cn",
  },

  iconPrefix: "iconfont icon-",

  logo: "/javapub-backgroup.svg",

  repo: "https://github.com/Rodert",

  docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  footer: "<a href='https://beian.miit.gov.cn/'>京ICP备2021007111号-2</a>",

  displayFooter: true,

  blog: {
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/rodert/JavaPub",
      GitHub: "https://github.com/Rodert",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/zhui-ma-7-49",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.javapub,

      // sidebar
      sidebar: sidebar.javapub,

      footer: "<a href='https://beian.miit.gov.cn/'>京ICP备2021007111号-2</a>",

      displayFooter: true,

      //浏览量
      visitor: true,

      blog: {
        description: "一个来自巴彦淖尔的朋友",
        intro: "/intro.html",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "<a href='https://beian.miit.gov.cn/'>京ICP备2021007111号-2</a>",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    //rss
    feed: {
      rss: true,
    },
    //搜索start
    search: {
      locales: {
        "/": {
          placeholder: "搜索",
        }
      },
    },
    //搜索end
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      // type: "giscus",
      // repo: "Rodert/JavaPub-Blog",
      // repoId: "R_kgDOHK-WNg",
      // category: "Announcements",
      // categoryId: "DIC_kwDOHK-WNs4COsXL",


      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      type: "waline",
      serverURL: "https://rodert-java-pub-blog-cq4tgfqik-rodert.vercel.app",
      dark: "auto",//自适应深色模式
      meta: ['nick', 'mail', 'link'],
      login: "force",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
