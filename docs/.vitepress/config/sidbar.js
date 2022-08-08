export function sidebarGuide() {
    return [{
        text: '指南',
        // 开启折叠
        collapsible: true,
        items: [{
                text: '安装',
                link: '/guide/installation'
            },
            {
                text: '快速开始',
                link: '/guide/quieStart'
            }
        ]
    }]
}

export function sidebarHtml() {
    return [
        {
            text: '前端',
            collapsible: true,
            items: [{
                text: 'Html',
                link: '/html/html'
            }]
        },
        {
            text: 'vue3',
            collapsible: true,
            items: [{
                text: 'pnpm环境安装',
                link: '/html/vue3/pnpm'
            },
            {
                text: 'reactive',
                link: '/html/vue3/reactive'
            },
            {
                text: 'effect',
                link: '/html/vue3/effect'
            },
            {
                text: '分支切换原理cleanEffect',
                link: '/html/vue3/cleanEffect'
            },
            {
                text: '调度器scopeEffect',
                link: '/html/vue3/scopeEffect'
            },
            {
                text: 'computed',
                link: '/html/vue3/computed'
            }
        ]
        }
    ]
}

export function sidebarNode() {
    return [{
        text: '后端',
        collapsible: true,
        items: [{
            text: 'Node',
            link: '/node/node'
        }]
    }]
}

export function sidebarSql() {
    return [{
        text: '数据库',
        collapsible: true,
        items: [{
            text: 'mysql',
            link: '/sql/mysql'
        }]
    }]
}