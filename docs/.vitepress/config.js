export default {
    title: "Xiao Shunshi",
    description: "Just playing around.",
    base: '/vitepress-docs/',
    appearance:false,
    head: [
        ['link', {
            rel: 'icon',
            href: '/vitepress-docs/favicon.ico'
        }]
    ],
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.jpeg',
        // siteTitle: "My Custom Title", // 可设置为false
        lastUpdatedText: '最后修改时间',
        outlineTitle: '目录',
        socialLinks: [{ icon: 'github', link: 'https://github.com/xiaoshunshi/vitepress-docs' }],
        nav: [{
                text: '指南',
                link: '/guide/installation',
                activeMatch: '/guide/',
            },
            {
                text: '教程',
                items: [{
                    // You may also omit the title.
                    items: [{
                            text: '前端',
                            link: '/html/html'
                        },
                        {
                            text: '后端',
                            link: '/node/node'
                        },
                        {
                            text: '数据库',
                            link: '/sql/mysql'
                        }
                    ]
                }]
            }
        ],
        sidebar: [{
            text: '指南',
            items: [
                // This shows `/guide/index.md` page.
                {
                    text: '安装',
                    link: '/guide/installation'
                },
                {
                    text: '快速开始',
                    link: '/guide/quieStart'
                }
            ]
        },
        {
            text: '前端',
            items: [
                // This shows `/guide/index.md` page.
                {
                    text: 'Html',
                    link: '/html/html'
                }
            ]
        },
        {
            text: '后端',
            items: [
                // This shows `/guide/index.md` page.
                {
                    text: 'Node',
                    link: '/node/node'
                }
            ]
        },
        {
            text: '数据库',
            items: [
                // This shows `/guide/index.md` page.
                {
                    text: 'mysql',
                    link: '/sql/mysql'
                }
            ]
        }],
        editLink: {
            pattern: 'https://github.com/xiaoshunshi/vitepress-docs/tree/main/docs/:path',
            text: '编辑链接'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Xiao Shunshi'
        },
        carbonAds: {
            code: 'CEBDT27Y',
            placement: 'vuejsorg'
        },
        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress'
        },
    },
    markdown: {
        config: (md) => {
          const { demoBlockPlugin } = require('vitepress-theme-demoblock')
          md.use(demoBlockPlugin)
        }
      }
};