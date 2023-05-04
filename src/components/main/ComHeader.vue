<template>
    <div class="header-container">
        <div class="left">
            <el-button icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
            <!-- <span>首页</span> -->
        </div>
        <div class="right">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <img src="@/assets/logo.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleMenu() {
            this.$store.commit('changeIsCollapse')
        },
        handleCommand(command) {
            switch (command) {
                case 'logout':
                    localStorage.clear()
                    this.$router.push('/login')
                    break
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.header-container {
    background-color: #333;
    height: 60px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    .text {
        font-size: 14px;
        margin-left: 20px;
    }

    .right {
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 5px 0 #fff;
        overflow: hidden;
    }
}
</style>