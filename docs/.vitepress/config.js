export default {
    title: "小顺石的VitePress博客",
    description: "Just playing around.",
    base: '/vitepress-docs/',
    head:[
        ['link', { rel: 'icon', href: '/vitepress-docs/favicon.ico' }]
    ],
    lastUpdated: true,
    themeConfig: {
        logo:'/logo.jpeg',
        // siteTitle: "My Custom Title", // 可设置为false
        lastUpdatedText: '最后修改时间',
        outlineTitle:'目录',
        nav: [{
                text: '指南',
                link: '/guide/installation',
                activeMatch: '/guide/',
            },
            {
                text: 'Dropdown Menu',
                items: [{
                    // You may also omit the title.
                    items: [{
                            text: 'Section A Item A',
                            link: '...'
                        },
                        {
                            text: 'Section B Item B',
                            link: '...'
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
};