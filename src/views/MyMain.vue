<template>
    <div>
        <el-container>
            <!-- <el-aside width="200px"> -->
            <el-aside width="auto">
                <com-asider></com-asider>
            </el-aside>
            <el-container>
                <el-header>
                    <com-header></com-header>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import ComAsider from '@/components/main/ComAsider.vue'
import ComHeader from '@/components/main/ComHeader.vue'
export default {
    components: {
        ComAsider, ComHeader
    },
    updated(){
        console.log(this.$route)
    }
}
</script>
<style lang="scss" scoped>
.el-header {
    padding: 0;
}

.el-main {
    padding-left: 20px;
    padding-top: 20px;
    height: calc(100vh - 60px);
    background-color: #f7f7f7;
}
</style>