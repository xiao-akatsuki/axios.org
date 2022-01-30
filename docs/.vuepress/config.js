module.exports = {
    base: '/',
    lang: 'en-US',
    title: 'axios',
    description: 'A make it easier for java to send HTTPS',
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
          text: 'Languages',
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
        '/guide/getting-started.md',
        '/guide/MinimalExample.md',
        '/guide/POSTRequests.md'
      ],
      sidebarDepth: 4,
      logo: '/logo/logo.svg',
      repoLabel:'axios',
      repo: 'xiao-akatsuki/axios',
      editLink:false,
      darkMode:true,
    },
  }
