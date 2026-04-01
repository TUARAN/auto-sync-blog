export default {
  // blog 基础配置
  blog: {
    title: "掘金安东尼",
    description: "传播技术  相信价值 🏄",
    logo: "https://p3-passport.byteacctimg.com/img/user-avatar/94387f7613d4f2f9237de6863164b2ff~300x300.image",
    siteName: "tuaran.me",
    head: [],
    keywords: ["前端", "掘金安东尼", "掘金", "JavaScript", "技术博客"],
    author: "掘金安东尼",
  },

  // vite press 构建配置
  press: {
    name: "掘金安东尼",
    text: "传播技术，相信价值。",
    tagline: "掘金安东尼的技术博客 · 655 篇文章 · 236 万阅读",
    image: "https://p3-passport.byteacctimg.com/img/user-avatar/94387f7613d4f2f9237de6863164b2ff~300x300.image",
    actions: [
      { theme: "brand", text: "开始阅读", link: "/overview/index" },
      { theme: "alt", text: "关注掘金", link: "https://juejin.cn/user/1521379823340792" },
    ],
    features: [
      { icon: "🎈", title: "博客平台小助手", details: "同步一流技术社区专属文章" },
      { icon: "🎁", title: "数据分析小能手", details: "年月总览统计数据分析" },
      { icon: "🎨", title: "自动化同步数据库", details: "每日自动化检查并更新" },
    ],

    // column：专栏；category：文章分类；tag：标签；annual：年度分类；follow：跳转掘金主页
    nav: ["column", "category", "ranking", "annual", "recent", "follow"],

    socialLinks: {
      github: "https://github.com/TeaTools/auto-sync-blog",
      // discord: "/",
      // facebook: "",
      // linkedin: "",
      // twitter: "/",
      // youtube: "/",
    },

    // # https://vitepress.dev/zh/reference/default-theme-team-page
    showTeam: true,
    members: [
      {
        avatar: "https://p3-passport.byteacctimg.com/img/user-avatar/94387f7613d4f2f9237de6863164b2ff~300x300.image",
        name: "掘金安东尼",
        title: "Author",
        links: {
          home: "https://tuaran.me",
          juejin: "https://juejin.cn/user/1521379823340792",
        },
      },
    ],
  },

  // 掘金
  juejin: {
    userId: "1521379823340792",
    columnsIds: [],
  },
}
