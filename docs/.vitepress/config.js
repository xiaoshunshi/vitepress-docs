import { nav } from './config/nav';
import {
    sidebar
} from './config/sidbar'
export default {
    title: "Xiao Shunshi",
    description: "Just playing around.",
    base: '/vitepress-docs/',
    appearance: false,
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
        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/xiaoshunshi/vitepress-docs'
        }],
        nav: nav(),
        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/xiaoshunshi/vitepress-docs/tree/main/docs/:path',
            text: '编辑链接'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Xiao Shunshi'
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
            const {
                demoBlockPlugin
            } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
};