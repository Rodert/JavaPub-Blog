# JavaPub-Blog

JavaPub的博客仓库

http://javapub.net.cn/

[toc]

## 启动方式


1. 下载依赖

初始化

> npm install vuepress

> npm install yarn

> yarn install

搜索：

> npm i -D @vuepress/plugin-search@next

> npm i -D @vuepress/plugin-docsearch@next

2. 命令运行本地服务

> yarn docs:dev


3. 打包成静态文件

命令用来生成静态文件，默认情况下，放置在docs/.vuepress/dist目录中，当然你也可以在docs/.vuepress/config.js中的dest字段来修改默认存放目录。

> yarn docs:build





# TODO

- [x] 初始化vuepress
- [x] 安装主题vuepress-theme-hope
- [x] 评论系统
- [ ] 侧边栏目录自动生成
- [ ] 404页面
- [ ] 访问量统计
- [ ] 百度提交收录链接
- [ ] 支持https
- [ ] SEO
- [ ] 本地搜索



# 备用信息

<a href='https://beian.miit.gov.cn/'>京ICP备2021007111号-2</a>


# 账号信息

评论管理：

https://rodert-java-pub-blog-cq4tgfqik-rodert.vercel.app/ui


# 项目结构介绍


`yarn.lock` yarn管理，最好不熬手动修改，可能破坏某些东西

`docs/zh` 主题样式参考

