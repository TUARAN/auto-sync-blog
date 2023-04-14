// 官方参数参考地址：https://vuepress-theme-reco.recoluan.com/views/1.x/blog.html
module.exports = {
  locales: { // 默认语言代码为 en-US
    '/': {
      lang: 'zh-CN' // 这里修改中文
    }
  },
  title: "{{user_name}}的文章合集",
  description: "自动化同步，精选文章，每日文章，工作日陪伴，{{user_name}}文章数据库", // meta 中的描述文字，用于SEO
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['meta', {
      name: 'keywords',
      content: '前端, 技术文章, 移动端, pc端, 数据库, 后端, {{user_name}}'
    }],
    [
      "link",
      {
        rel: "shortcut icon ",
        type: "images/x-icon",
        href: "{{favicon_ico}}"
      },
    ],
    [
      "script",
      {},
      `{{baidu_coutn_url}}`
    ],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/auto-sync-blog/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  theme: 'reco',
  themeConfig: { // 博客配置
    logo: '{{logo_png}}',
    // authorAvatar: '/avatar.png',
    noFoundPageByTencent: true, // 关闭 404 腾讯公益
    author: 'github.com/TeaTools',
    modePicker: false, // 不显示模式调节按钮（true 显示）
    startYear: '{{start_year}}',
    nav: [{
      text: "✍️总览",
      link: "/sort/all.html",
    }, {
      text: '🕙时间分类',
      items: "{{time_sort_list}}",
    }, {
      text: '📚专栏',
      link: "/categories/专栏/",
    }, {
      text: "👣找到我",
      link: "{{find_me_url}}",
    }, {
      text: "💌订阅",
      link: "{{order_column_url}}",
    }, {
      text: "🐛源码",
      link: "https://github.com/TeaTools/auto-sync-blog",
    }, ],
    displayAllHeaders: true,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2,
    // 博客配置
    blogConfig: {}
  }
};