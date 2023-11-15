<template>
  <div class="register-container">
    <el-card class="register-card">
      <h2 class="register-title">用户注册</h2>
      <el-form ref="registerForm" :model="registerForm" :rules="rules" class="register-form">
        <el-form-item label="账号" prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="registerForm.confirmPassword" placeholder="请再次确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register" class="regist-button">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次确认密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    register() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          // 提交注册逻辑
          // 在这里发送注册请求或其他处理注册的操作
          this.$router.push('/');
          Message.success('注册成功！请登录');
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/images/login-back.jfif);
  height: 100vh;
  background-size: cover;
  background-position: center;
}

.register-card {
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: 0.9; /* 添加此行设置透明度 */
}

.register-title {
  text-align: center;
  margin-bottom: 20px;
  font-family: "BlackChancery", cursive;
  font-size: 30px;
  color: #000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.register-form {
  text-align: left;
}

.regist-button{
  margin: 0 auto;
  display: block;
  width: 120px;
}
</style>