<template>
    <div>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
            <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
            <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.path">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.lable }}</span>
            </el-menu-item>
            <el-submenu v-for="item in hasChildren" :key="item.lable" :index="item.lable">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{ item.lable }}</span>
                </template>
                <el-menu-item-group v-for="item2 in item.children" :key="item2.name" :index="item2.path">
                    <el-menu-item :index="item2.name">
                        <i :class="`el-icon-${item2.icon}`"></i>
                        <span slot="title">{{ item2.lable }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
  
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh;
    border-right: none;

    h3 {
        color: #fff;
        text-align: center;
        line-height: 60px;
        font-size: 16px;
    }
}
</style>
  
<script>
export default {
    data() {
        return {
            // isCollapse: false,
            menuData: [
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
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    computed: {
        // 有子菜单
        hasChildren() {
            return this.menuData.filter(item => {
                return item.children
            })
        },
        // 没有子菜单
        noChildren() {
            return this.menuData.filter(item => {
                return !item.children
            })
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>