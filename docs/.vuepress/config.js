module.exports={
    title: 'JavaPub',
    description: '专注于面试、副业，技术人的成长记录',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/javapub.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        logo: '/javapub.jpg',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        author: "me",
        record: '京ICP备2021007111号',
        recordLink: 'http://baidu.com',
        // 项目开始时间，只填写年份
        startYear: '2022'
      }
   }