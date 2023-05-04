[
    {
        path: '/',
        name: 'home',
        lable: '首页',
        icon: 's-home',
        url: 'Home/Home'
    },
    {
        path: '/mall',
        name: 'mall',
        lable: '商品管理',
        icon: 'video-play',
        url: 'MallManage/MallManage'
    },
    {
        path: '/user',
        name: 'user',
        lable: '用户管理',
        icon: 'user',
        url: 'UserManage/UserManage'
    },
    {
        lable: '其他',
        icon: 'location',
        children: [
            {
                path: '/page1',
                name: 'page1',
                lable: '页面1',
                icon: 'setting',
                url: 'Other/PageOne'
            }, {
                path: '/page2',
                name: 'page2',
                lable: '页面2',
                icon: 'setting',
                url: 'Other/PageTwo'
            }
        ]
    }
]
tableData: [
    {
        name: '华为',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: '小米',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: '三星',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: 'OPPO',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: 'VIVO',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: '华为',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: '小米',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: '三星',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: 'OPPO',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    },
    {
        name: 'VIVO',
        todayBuy: 100,
        monthBuy: 500,
        totalBuy: 1000
    }
],
tableLable: {
    name: '名称',
    todayBuy: '今日订单',
    monthBuy: '本月订单',
    totalBuy: '总订单'
}
countData: [
    {
        name:'今日支付订单',
        value:111,
        icon:'success',
        color:'#ffb980'
    },
    {
        name:'今日收藏订单',
        value:222,
        icon:'success',
        color:'#5ab1ef'
    },
    {
        name:'今日未支付订单',
        value:1111,
        icon:'success',
        color:'#2ec7c9'
    },
    {
        name:'本月支付订单',
        value:1111,
        icon:'success',
        color:'#ffb980'
    },
    {
        name:'本月收藏订单',
        value:2222,
        icon:'success',
        color:'#5ab1ef'
    },
    {
        name:'本月未支付订单',
        value:11113,
        icon:'success',
        color:'#2ec7c9'
    },
]
operateFormLabel:[
    {
        model:'name',
        label:'姓名',
        type:'input'
    },
    {
        model:'age',
        label:'年龄',
        type:'input'
    },
    {
        model:'sex',
        label:'性别',
        type:'select',
        opts:[
            {
                label:'男',
                value:1
            },
            {
                label:'女',
                value:0
            }
        ]
    },
    {
        model:'birth',
        label:'出生日期',
        type:'date'
    },
    {
        model:'addr',
        label:'地址',
        type:'input'
    }
]