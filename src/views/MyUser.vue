<template>
    <div class="manage">
        <el-dialog title="新增用户" :visible.sync="dialogVisible" width="30%">
            <!-- 表单信息 -->
            <el-form ref="form" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="form.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-select v-model="form.sex" placeholder="请输入性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="生日" prop="birth">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.birth"
                            style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input type="textarea" placeholder="请输入地址" v-model="form.addr"></el-input>
                </el-form-item>
            </el-form>
            <!-- 对话框footer -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetForm()">重置</el-button>
                <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button @click="dialogVisible = true" type="primary">
                新增
            </el-button>
        </div>
        <template>
            <el-table :data="comTableData" style="width: 100%">
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="180">
                </el-table-column>
                <el-table-column prop="age" label="年龄" width="180">
                </el-table-column>
                <el-table-column prop="birth" label="出生日期" width="180">
                </el-table-column>
                <el-table-column prop="addr" label="地址">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>
<script>
import * as moment from 'moment';
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                sex: '',
                age: '',
                addr: '',
                birth: ''
            },
            rules: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '性别不能为空', trigger: 'blur' }
                ],
                age: [
                    { required: true, message: '年龄不能为空', trigger: 'blur' },
                    { type: 'number', message: '年龄必须为数字', trigger: 'change' }
                ],
                addr: [
                    { required: true, message: '地址不能为空', trigger: 'blur' }
                ],
                birth: [
                    { required: true, message: '生日不能为空', trigger: 'blur' }
                ]
            },
            tableData: [
                {
                    name: '张三',
                    sex: '男',
                    age: 10,
                    addr: '长江西路01号',
                    birth: '2023-02-28T16:00:00.000Z'
                },
                {
                    name: '张三',
                    sex: '男',
                    age: 10,
                    addr: '长江西路01号',
                    birth: '2023-02-28T16:00:00.000Z'
                },
                {
                    name: '张三',
                    sex: '男',
                    age: 10,
                    addr: '长江西路01号',
                    birth: '2023-02-28T16:00:00.000Z'
                },
                {
                    name: '张三',
                    sex: '男',
                    age: 0,
                    addr: '长江西路01号',
                    birth: '2023-02-28T16:00:00.000Z'
                },
                {
                    name: '张三',
                    sex: '男',
                    age: 0,
                    addr: '长江西路01号',
                    birth: '2023-02-28T16:00:00.000Z'
                },
                {
                    name: '张三',
                    sex: '男',
                    age: 0,
                    addr: '长江西路01号',
                    birth: '2023-02-28T16:00:00.000Z'
                },
                {
                    name: '张三',
                    sex: '男',
                    age: 0,
                    addr: '长江西路01号',
                    birth: '2023-02-28T16:00:00.000Z'
                }
            ],
            // 0表示新增，1表示编辑
            modalType: 0,
            index: -1
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (this.modalType === 0) {
                    if (valid) {
                        // alert('submit!');
                        // console.log(this.form)
                        this.tableData.push(this.form)
                        this.dialogVisible = false
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                }else {
                    if (valid) {
                        // alert('submit!');
                        // console.log(this.form)
                        this.tableData[this.index] = this.form
                        this.dialogVisible = false
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                }
            });
        },
        resetForm() {
            this.form = {}
        },
        handleEdit(index, row) {
            this.dialogVisible = true
            this.modalType = 1
            this.form = row
            this.index = index
            console.log(row);
        },
        handleDelete(index) {
            this.tableData.splice(index, 1)
        }
    },
    computed: {
        comTableData() {
            return this.tableData.map(item => {
                item.birth = moment(item.birth).format('YYYY-MM-DD')
                return item
            })
        }
    }
}
</script>