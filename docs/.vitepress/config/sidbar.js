export function sidebar() {
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
        },
        {
            text: '前端',

            collapsible: true,
            items: [{
                text: 'Html',
                link: '/html/html'
            }]
        },
        {
            text: '后端',
            collapsible: true,
            items: [{
                text: 'Node',
                link: '/node/node'
            }]
        },
        {
            text: '数据库',
            //
            collapsible: true,
            items: [{
                text: 'mysql',
                link: '/sql/mysql'
            }]
        }
    ]
}