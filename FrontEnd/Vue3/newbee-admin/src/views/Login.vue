<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <img class="logo" src="https://s.weituibao.com/1582958061265/mlogo.png" alt="">
        <div class="name">
          <div class="title">新蜂商城</div>
          <div class="tips">
            Vue3.0后台管理系统
          </div>
        </div>
      </div>
      <el-form 
        label-position="top" 
        :rules="state.rules"
        :model="state.ruleForm"
        ref="loginForm"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model.trim="state.ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="state.ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333;">登录表示您已同意<a>《服务条款》</a></div>
          <el-button style="width: 100%;" type="primary" @click="submitForm">
            立即登录
          </el-button>
          <el-checkbox v-model="state.checked" @change="!state.checked">
            下次自动登录
          </el-checkbox>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import axios from '@/utils/axios'
import md5 from 'js-md5'
import { reactive, ref } from 'vue'
import { localSet } from '@/utils'

const loginForm = ref(null)
const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  },
  checked: true,
  rules: {
    username: [
      {
        required: true, message: '账户不能为空', trigger: 'blur'
      }
    ],
    password: [
      {
        required: true, message: '密码不能为空', trigger: 'blur'
      }
    ]
  }
})
const submitForm = async () => {
  loginForm.value.validate((valid) => {
    console.log(valid)
    if (valid) {
      axios.post('/adminUser/login', {
        userName: state.ruleForm.username || '',
        passwordMd5: md5(state.ruleForm.password)
      }).then(res => {
        localSet('token', res)
        // 登录完刷新页面
        window.location.href = '/'
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = () => {
  loginForm.value.resetFields()
}
</script>

<style lang="scss" scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;

  .login-container {
    width: 420px;
    height: 500px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);

    .head {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 0 20px 0;

      img {
        width: 100px;
        height: 100px;
        margin-right: 20px;
      }

      .title {
        font-size: 28px;
        color: #1BAEAE;
        font-weight: bold;
      }

      .tips {
        font-size: 12px;
        color: #999;
      }
    }

    .login-form {
      width: 70%;
      margin: 0 auto;

      ::v-deep {
        .el-form--label-top {
          .el-form-item__label {
            padding: 0;
          }
        }

        .el-form-item {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>