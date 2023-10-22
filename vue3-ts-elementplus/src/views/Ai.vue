<template>
    <div class="login-container">
      <el-form ref="loginForm" :model="loginData" :rules="loginRules" class="login-form">
        <h2>Login</h2>
        <div class="form-group">
          <el-input v-model="loginData.username" placeholder="Username"></el-input>
        </div>
        <div class="form-group">
          <el-input v-model="loginData.password" type="password" placeholder="Password"></el-input>
        </div>
        <div class="form-group">
          <el-button type="primary" @click="login">Login</el-button>
        </div>
      </el-form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { ElForm, ElInput, ElButton } from 'element-plus';
  
  export default defineComponent({
    name: 'Login',
    components: { ElForm, ElInput, ElButton },
    setup() {
      const loginData = ref({
        username: '',
        password: '',
      });
      const loginRules = {
        username: [
          { required: true, message: 'Please enter your username', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please enter your password', trigger: 'blur' },
        ],
      };
      const error = ref('');
  
      const login = async () => {
        try {
          // Simulating login process here, you can replace it with your actual login logic
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData.value),
          });
          if (response.ok) {
            // Login successful, redirect to the home page or perform other actions
            console.log('Login successful!');
            // You can redirect the user here if needed
          } else {
            // Login failed, display an error message
            error.value = 'Invalid username or password.';
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      };
  
      return { loginData, loginRules, error, login };
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    /* Add your custom styles here */
  }
  .login-form {
    /* Add your custom styles for the form here */
  }
  .form-group {
    /* Add your custom styles for the form groups here */
  }
  .error {
    color: red;
    font-weight: bold;
  }
  </style>