<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="username">
      <el-input
        v-model="registerUser.username"
        placeholder="Enter UserName..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item label="选择身份">
      <el-select v-model="registerUser.roletype" placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <el-option label="游客" value="visitor"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleRegister('registerForm')"
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, defineProps } from "vue";
import router from "@/router";
import {registerReq} from "../api/register";
// import axios from 'axios' // 仅限在当前组件使用


const props=defineProps({
  registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
})
    // @ts-ignore
    const { ctx } = getCurrentInstance();

    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          console.log(ctx.registerUser);
          registerReq(ctx.registerUser).then(res=>{
          console.log(res.data);
           if(res.data=="success"){
             router.push({ path: "/" });
          }else{
            alert("注册失败");
          }
        })





        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

   


</script>
<style scoped>
</style>