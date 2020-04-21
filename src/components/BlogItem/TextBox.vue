<template>
    <div class="text_box">
        <div class="text_form">
            <el-form ref="form" :model="form" label-width="1.2rem">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="form.phone" @blur="check"></el-input>
                </el-form-item>
                <el-form-item label="提交时间" prop="date1">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="你的建议" prop="desc">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">提交</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {sendAioxs,sendSuggest} from "../../util/axios";
    import axios from "axios"
    var qs = require("qs")

    export default {
        name: "TextBox",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    phone: '',
                    desc: ''
                }
            }
        },
        methods: {
            submitForm(formName) {
                let data = qs.stringify(this.form)
                // sendAioxs({
                //     url: '/suggest'
                // },data).then(() => {
                //     console.log("提交成功");
                // }).catch(e => {
                //     console.log(e);
                // })
                sendSuggest(data).then(() => {
                    alert("提交成功");
                }).catch(e => {
                    console.log(e);
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                console.log(1);
            },
            check() {
                let reg = /^1[0-9]{10}$/
                if(!reg.test(this.form.phone)) {
                    alert("请输入正确的手机号");
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .text_box {
        position: absolute;
        width: 22rem;
        height: 10rem;
        z-index: 1;
        left: 1rem;
        top: 2.5rem;
        color: black;
    }
</style>