export function nav(){
    return [{
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
                    link: '/html/html',
                    activeMatch: '/html/',
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
]
}