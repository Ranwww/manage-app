<template>
    <div>
        <el-form :model="form" :rules="rules" label-width="80px">
            <h3>系统登录</h3>
            <el-form-item label="用户名：" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"> </el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="form.password" show-password placeholder="请输入密码"> </el-input>
            </el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
        </el-form>
    </div>
</template>
<script>
import Mock from 'mockjs'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login() {
            console.log(this.form)
            const token = Mock.Random.guid()
            localStorage.setItem('token', token)
            localStorage.setItem('username', this.form.username)
            this.$router.push('/')
        }
    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background-color:#f3f3f3;')
    },
    beforeDestroy() {
        document.querySelector('body').removeAttribute('style')
    }
}
</script>
<style lang="scss" scoped>
.el-form {
    background-color: white;
    padding: 20px;
    width: 350px;
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 #ccc;

    h3 {
        font-size: 18px;
        line-height: 36px;
        height: 50px;
    }
}
</style>