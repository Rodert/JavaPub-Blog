import { defineNavbarConfig } from "vuepress-theme-hope";

export const javapub = defineNavbarConfig([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  { text: "练手项目", icon: "creative", link: "/project/" },
  {
    text: "最少必要面试题",
    icon: "edit",
    prefix: "/willbe/",
    children: [
      {
        text: "文章 1-n",
        icon: "edit",
        // prefix: "article/",
        children: [
          { text: "10道不得不会的Java基础面试题", icon: "edit", link: "java-basics-interview-must" },
          { text: "10道不得不会的Java容器面试题", icon: "edit", link: "java-container-interview-must" },
          { text: "10道不得不会的Java并发基础面试题", icon: "edit", link: "java-concurrent-interview-must" },
          { text: "10道不得不会的JVM面试题", icon: "edit", link: "jvm-interview-must" },
          { text: "10道不得不会的MySQL基础面试题", icon: "edit", link: "mysql-interview-must" },
          { text: "10道不得不会的ElasticSearch面试题", icon: "edit", link: "elasticsearch-interview-must" },
        ],
      },
    ],
  },
  {
    text: "关于站长",
    icon: "note",
    link: "/me/",
  },
]);
