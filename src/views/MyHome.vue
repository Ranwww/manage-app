<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card>
                    <div class="user">
                        <img src="@/assets/logo.png" alt="">
                        <div class="user-info">
                            <div class="name">Admin</div>
                            <div class="access">超级管理员</div>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间：<span>2023-1-1</span></p>
                        <p>上次登录地点：<span>安徽</span></p>
                    </div>
                </el-card>
                <el-card>
                    <template>
                        <el-table :data="tableData" style="width: 100%;">
                            <el-table-column v-for="(val, key) in tableLable" :key="key" :prop="key" :label="val">
                            </el-table-column>
                        </el-table>
                    </template>
                </el-card>
            </el-col>
            <el-col :span="16">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{
                        display: 'flex',
                        padding: 0
                    }">
                        <i class="icon" :class="`el-icon-${item.icon}`" :style="{
                            backgroundColor: item.color
                        }"></i>
                        <div class="num-right">
                            <p class="name">{{ item.value }}</p>
                            <p class="value">{{ item.name }}</p>
                        </div>
                    </el-card>
                </div>
                <el-card style="height:280px;">
                    <!-- 折线图 -->
                    <div ref="echarts01" style="height: 280px;">
                    </div>
                </el-card>
                <div class="graph">
                    <el-card style="height:260px;">
                        <!-- 柱状图 -->
                        <div ref="echarts02" style="height: 260px;">
                        </div>
                    </el-card>
                    <el-card style="height:260px;">
                        <!-- 饼图 -->
                        <div ref="echarts03" style="height: 260px;">
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { getData } from '@/api/index'
import * as echarts from 'echarts';
export default {
    data() {
        return {
            tableData: [],
            tableLable: {
                name: '名称',
                todayBuy: '今日订单',
                monthBuy: '本月订单',
                totalBuy: '总订单'
            },
            countData: [
                {
                    name: '今日支付订单',
                    value: 111,
                    icon: 'success',
                    color: '#ffb980'
                },
                {
                    name: '今日收藏订单',
                    value: 222,
                    icon: 'star-on',
                    color: '#5ab1ef'
                },
                {
                    name: '今日未支付订单',
                    value: 1111,
                    icon: 's-goods',
                    color: '#2ec7c9'
                },
                {
                    name: '本月支付订单',
                    value: 1111,
                    icon: 'success',
                    color: '#ffb980'
                },
                {
                    name: '本月收藏订单',
                    value: 2222,
                    icon: 'star-on',
                    color: '#5ab1ef'
                },
                {
                    name: '本月未支付订单',
                    value: 11113,
                    icon: 's-goods',
                    color: '#2ec7c9'
                },
            ],
            videoData: [],
            userData: [],
            orderData: {}
        }
    },
    mounted() {
        getData().then(res => {
            this.tableData = res.data.getStatistical.data.tableData
            this.videoData = res.data.getStatistical.data.videoData
            this.userData = res.data.getStatistical.data.userData
            this.orderData = res.data.getStatistical.data.orderData
            {
                // 折线图
                const echarts01 = echarts.init(this.$refs.echarts01)
                var echarts01Option = {}
                // echarts01Option.title = { text: '销售量' }
                echarts01Option.xAxis = { data: this.orderData.date }
                echarts01Option.yAxis = {}
                echarts01Option.legend = { data: Object.keys(this.orderData.data[0]) }
                echarts01Option.tooltip = { trigger: 'axis' }
                echarts01Option.series = []
                Object.keys(this.orderData.data[0]).forEach(key => {
                    echarts01Option.series.push({
                        name: key,
                        type: 'line',
                        data: this.orderData.data.map(item => {
                            return item[key]
                        })
                    })
                })
                echarts01.setOption(echarts01Option)
                // 柱状图
                const echarts02 = echarts.init(this.$refs.echarts02)
                var echarts02Option = {}
                // echarts02Option.title = { text: '用户数据' }
                echarts02Option.tooltip = { trigger: 'axis' }
                echarts02Option.yAxis = {}
                echarts02Option.xAxis = { data: this.userData.map(item => { return item.date }) }
                echarts02Option.legend = { data: ['新增用户', '活跃用户'] }
                echarts02Option.series = [
                    {
                        name: '新增用户',
                        type: 'bar',
                        data: this.userData.map(item => { return item.new })
                    }, {
                        name: '活跃用户',
                        type: 'bar',
                        data: this.userData.map(item => { return item.active })
                    }
                ]
                echarts02.setOption(echarts02Option)
                // 饼图
                const echarts03 = echarts.init(this.$refs.echarts03)
                var echarts03Option = {}
                // echarts03Option.title = { text: '销量对比' }
                echarts03Option.tooltip = { trigger: 'item' }
                echarts03Option.series = [{
                    name: '销量',
                    type: 'pie',
                    radius: '55%',
                    data: this.videoData
                }]
                echarts03.setOption(echarts03Option)
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.el-card:hover {
    box-shadow: 0 0 15px 5px gray;
}

.el-card {
    margin-right: 20px;
    margin-bottom: 20px;

    .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
        margin-bottom: 20px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            box-shadow: 0 0 5px 0 gray;
            margin-right: 40px;
        }

        .user-info {
            .name {
                font-size: 40px;
                margin-bottom: 10px;
            }

            .access {
                color: gray;
            }

        }
    }

    .login-info {
        color: gray;
        font-size: 14px;
        line-height: 28px;

        span {
            color: black;
        }
    }
}

.num {
    display: flex;
    flex-wrap: wrap;

    .el-card {
        width: calc(33% - 20px);
    }

    .icon {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: #fff;
    }

    .num-right {
        padding: 10px;

        .name {
            font-size: 28px;
            font-weight: 800;
        }

        .value {
            font-size: 14px;
            color: gray;
        }
    }
}

.graph {
    display: flex;

    .el-card {
        flex: 1
    }
}
</style>