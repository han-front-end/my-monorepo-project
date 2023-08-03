import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'


const sidebar = {
  '/': [
    {text: '快速开始', link: ''},
    {
      text: '通用',
      items: [
        {text: 'Button 按钮', link: '/components/button/'}
      ]
    },
    {text: '导航'},
    {text: '反馈'},
    {text: '数据录入'},
    {text: '数据展示'},
    {text: '布局'},
  ]
}

const config= {
  themeConfig: {
    nav: [
      {text: '开发指南', link: '/components/button/'},
      {text: '组件使用', link: '/components/button/'},
    ],
    logo: '/logo.png',
    siteTitle: 'MidSummer-UI',
    socialLinks: [
      {icon: 'github', link: 'https://github.com/lazydog11/my-monorepo-project'}
    ],
    sidebar,
    outline: 'deep',
    outlineTitle: '章节目录',
    docFooter: {
      prev: '←上一篇',
      next: '下一篇→',
    },
    lastUpdatedText: '上次更新时间',
    footer: {
      message: '',
      copyright: 'Copyright © 2023 HANLEI',
    },
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
}

export default config