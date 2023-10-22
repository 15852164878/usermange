<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn"
        >提交</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref, getCurrentInstance, defineProps } from "vue";
import {loginReq} from "../api/login";
import router from "@/router";
import {loginUser,rules} from "../utils/loginValidators"



const props=defineProps({
  loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
})


    // @ts-ignore
    const { ctx } = getCurrentInstance();

    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
         // console.log( ctx.loginUser.email, ctx.loginUser.password);
          
        loginReq(ctx.loginUser).then(res=>{
          console.log(res.data);
           if(res.data=="success"){
             router.push({ path: "/Home" });
          }else{
            alert("登录失败");
          }
        })


        //   axios({
          
        //   method: "post",
        //   url: "http://localhost:8081/JSP-Servlet/UsersController?method=login",
        //   data:ctx.loginUser,
        // }).then((res)=>{
        
        //   console.log(res.data)
        // })


        //////////////////////////////////////////////////////////////////////////////


          // aixos
          //  .get(
          //  'http://localhost:8081/JSP-Servlet/BrandController?aa'
          //  )
          //  .then((res:any)=>{
          //   console.log("res");
          //  ctx.$message({
          //   message:"注册成功",
          //   type:"succes",
          // });
          // router.push({ path: "/login" });
        //  });


        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

   

</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>