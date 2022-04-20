# JavaPub-Blog

JavaPub的博客仓库

http://javapub.net.cn/

[toc]

## 启动方式


1. 下载依赖

初始化

> npm install yarn

> yarn install


2. 命令运行本地服务

> yarn docs:dev


3. 打包成静态文件

命令用来生成静态文件，默认情况下，放置在docs/.vuepress/dist目录中，当然你也可以在docs/.vuepress/config.js中的dest字段来修改默认存放目录。

> vuepress build docs

或

> npm run build



# TODO

- [x] 初始化vuepress
- [x] 安装主题
- [x] 评论系统
- [x] 侧边栏目录自动生成
- [ ] 404页面
- [ ] 不蒜子访问量统计
- [ ] 百度提交收录链接
- [ ] 支持https
- [ ] SEO