import Mock from 'mockjs'

export default {
    getStatistical: () => {
        let list = []
        for (let i = 0; i < 7; i++) {
            list.push(
                Mock.mock({
                    华为: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    OPPO: Mock.Random.float(100, 8000, 0, 0),
                    VIVO: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: 'huawei',
                        value: 5999
                    },
                    {
                        name: 'xiaomi',
                        value: 1999
                    },
                    {
                        name: 'samsung',
                        value: 1216
                    },
                    {
                        name: 'oppo',
                        value: 4455
                    },
                    {
                        name: 'vivo',
                        value: 3333
                    },
                ],
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 16,
                        active: 250
                    },
                    {
                        date: '周三',
                        new: 52,
                        active: 333
                    },
                    {
                        date: '周四',
                        new: 16,
                        active: 151
                    },
                    {
                        date: '周五',
                        new: 45,
                        active: 346
                    },
                    {
                        date: '周六',
                        new: 35,
                        active: 424
                    },
                    {
                        date: '周日',
                        new: 114,
                        active: 333
                    },
                ],
                orderData: {
                    date: ['20200101', '20200102', '20200103', '20200104', '20200105', '20200106', '20200107'],
                    data: list
                },
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
                ]
            }
        }
    }
}