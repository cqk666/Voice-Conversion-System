<template>
  <div class="login-container">
    <el-row class="login-row">
      <el-col :span="12" :offset="6">
        <el-card class="login-card">
          <h2 class="login-title">良译通</h2>
          <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" class="login-button">登录</el-button>
            </el-form-item>
          </el-form>
          <p class="register-link"><router-link to="/register">还没有账号？点击注册</router-link></p >
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Message } from 'element-ui';
import { login } from '@/utils/Login'
export default {
  data() {
    return {
      loginForm: {
        // website: '',
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // if(login(this.loginForm)){
          //   this.$router.push('/index');
          //   Message.success('登录成功！');
          // }
          login(this.loginForm).then(response => {
            console.log(response);
              if(response.data.code==200){
                this.$router.push('/index');
                Message.success('登录成功！');
              }else {
                Message.error('用户名或密码错误');
                return false;
              }
          })
        } else {
          console.log('登录校验失败');
          return false;
        }
      });
    },
  }
};
</script>

<style scoped>

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(../assets/images/login-back.jfif);
  background-size: cover;
  background-position: center;
}

.login-row {
  width: 100%;
}

.login-card {
  width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: 0.9; /* 添加此行设置透明度 */
}

.login-title {
  margin-bottom: 20px;
  font-family: "BlackChancery", cursive;
  font-size: 48px;
  color: #000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.login-form {
  text-align: left;
}

.register-link {
  margin-top: 10px;
}

.register-link a {
  color: #409EFF;
}

.login-button{
  margin: 0 auto;
  display: block;
  width: 120px;
}

</style>