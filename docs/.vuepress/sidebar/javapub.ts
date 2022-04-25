import { defineSidebarConfig } from "vuepress-theme-hope";

export const javapub = defineSidebarConfig({
  "/": [
    "",
    "home",
    "slide",
    {
      text: "最少必要面试题",
      icon: "creative",
      prefix: "willbe/",
      link: "willbe/",
      collapsable: true,//可折叠
      children: "structure",
    },
    {
      text: "小游戏",
      icon: "creative",
      prefix: "project/game/",
      link: "project/game/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "文章",
      icon: "creative",
      prefix: "posts/",
      link: "posts/",
      collapsable: true,
      children: [
        {
          text: "推文",
          icon: "creative",
          prefix: "article/",
          // link: "project/game/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "python",
          icon: "creative",
          prefix: "python/",
          // link: "project/game/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "redis",
          icon: "creative",
          prefix: "redis/",
          collapsable: true,
          children: "structure",
        },
      ],
    },

    
    // {
    //   text: "文章",
    //   icon: "note",
    //   prefix: "posts/",
    //   children: [
    //     {
    //       text: "文章 1-4",
    //       icon: "note",
    //       collapsable: true,
    //       prefix: "article/",
    //       children: ["article1", "article2", "article3", "article4"],
    //     },
    //     {
    //       text: "文章 5-12",
    //       icon: "note",
    //       children: [
    //         {
    //           text: "文章 5-8",
    //           icon: "note",
    //           collapsable: true,
    //           prefix: "article/",
    //           children: ["article5", "article6", "article7", "article8"],
    //         },
    //         {
    //           text: "文章 9-12",
    //           icon: "note",
    //           children: ["article9", "article10", "article11", "article12"],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
});
