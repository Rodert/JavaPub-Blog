module.exports = {
	theme: 'reco',
    title: 'JavaPub',
    description: '专注于面试、副业，技术人的成长记录',
    repo: 'https://github.com/Rodert/JavaPub.git', 
    head: [
        ['link', { rel: 'icon', href: '/javapub.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        logo: '/javapub.jpg',
        nav: [
          { text: 'Home', link: '/' },
          { text: '技术', link: '/' },
          { text: '关于我', link: '/' },
          { text: 'External', link: 'https://google.com' },
          { text: 'GitHub', link: 'https://github.com/Rodert/JavaPub' },
        ],
        // 备案
  		record: '京ICP备2021007111号-2',
  		recordLink: 'https://beian.miit.gov.cn',
  		cyberSecurityRecord: '京ICP备2021007111号-2',
  		cyberSecurityLink: 'https://beian.miit.gov.cn',
  		// 项目开始时间，只填写年份
   		startYear: '2017',
        // 项目开始时间，只填写年份
        startYear: '2022',
        sidebar: {
          '/2022/': [
            ['/2022/3/', '3月份'],
            ['/2022/4/', '4月份'],
          ]
        },
      },
      // valineConfig: {     // valine 评论功能配置信息
      //   appId: 'd7NFtx4wHBBsOmM19Vtb51qw-gzGzoHsz',// your appId
      //   appKey: 'GJe8HHwHvCEnpnEKyVYLj7eA', // your appKey
      //   placeholder: '尽情留下你想说的话吧~',           // 评论框占位符
      //   avatar: 'wavatar',           // 评论用户的头像类型
      //   highlight: true,         // 代码高亮
      //   recordIP: true,         // 记录评论者的IP
      // },
    //   plugins: [
    //     [
    //       'vuepress-plugin-comment',
    //       {
    //         choosen: 'valine',
    //         // options选项中的所有参数，会传给Valine的配置
    //         options: {
    //           el: '#valine-vuepress-comment',
    //           appId: 'd7NFtx4wHBBsOmM19Vtb51qw-gzGzoHsz',
    //           appKey: 'GJe8HHwHvCEnpnEKyVYLj7eA',
    //         },
    //       },
    //     ],
    //   ],
   }