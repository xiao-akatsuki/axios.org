module.exports = {
    base: '/axios.org/',
    lang: 'en-US',
    title: 'axios',
    description: 'This is axios site',
    themeConfig: {
      navbar: [
        {
          text: 'Guide',
          link: '/guide/',
        },
        {
          text: 'Issue',
          link: 'https://github.com/xiao-akatsuki/axios/issues'
        },
        {
          text: 'Pull Requests',
          link: 'https://github.com/xiao-akatsuki/axios/pulls'
        },
        {
          text: '语言',
          children: [
            {
              text: 'English',
              link: '/',
            },
            {
              text: '中文',
              link: 'https://xiao-akatsuki.github.io/zh.axios.org/',
            },
          ]
        },
        {
          text: 'version',
          children: [
            {
              text: '1.0.0',
              link: '/',
            },
          ]
        }
      ],
      sidebar: [
        '/guide/README.md',
        '/guide/MinimalExample.md',
        '/guide/POSTRequests.md'
      ],
      sidebarDepth: 2,
      logo: '/logo/logo.png',
      repoLabel:'axios',
      repo: 'xiao-akatsuki/axios',
      editLink:false,
      darkMode:false,
    },
  }