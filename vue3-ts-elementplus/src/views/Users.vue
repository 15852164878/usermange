<template>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
   
        <el-form-item label="Approved by">
      <el-input v-model="formInline.userName" placeholder="Approved by" clearable />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select
        v-model="formInline.region"
        placeholder="Activity zone"
        clearable
      >
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>

  </el-form>

    
    
    <el-button type="danger">批量删除</el-button>
    <el-button type="primary">新增用户</el-button>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >

    <el-table-column type="index" width="50" />
    <el-table-column type="selection" width="55" />

      <el-table-column prop="email" label="email" width="180" />
      <el-table-column prop="password" label="密码" width="180" />
      <el-table-column prop="nickname" label="昵称" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="phonenumber" label="手机号" width="180" />
      <el-table-column prop="creationtime" label="创建时间" width="180" />
      <el-table-column fixed="right" label="Operations" width="180">
      <template #default>
        <el-button link type="primary" size="small">详细</el-button>
        <el-button link type="primary" size="small" @click="handleClick"  >修改</el-button  >
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>



    <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted,onUpdated   } from 'vue';
   import { ref  } from 'vue';
  // import { reactive  } from 'vue';
   import { getCurrentInstance  } from 'vue';
 
  import {tableRowClassName,tableData,formInline} from "@/utils/userValidators";
  import {getAllUsersReq} from "../api/users";
import router from "@/router";
  
const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const handleClick = () => {
  console.log('click')
}
//const {ctx}=getCurrentInstance();

const onSubmit = () => {
  console.log('submit!')
}

 onMounted(() => {
    getAllUsersReq().then(res=>{
     for(let i=0;i<res.data.length;i++){
       tableData.push(res.data[i]);

       
         }
        
        }).then(response => {
        console.log(response);
    // 处理成功响应
  }).catch(error => {
    // 处理错误
    console.log(error);
  });
  })













//const { ctx } = getCurrentInstance();
  // console.log(ctx.$ref)
  // console.log(ctx.$props)
  // console.log(ctx.$slots)
  // console.log(ctx.$slots.default)
  // console.log(ctx.$slots.default[0])
  // console.log(ctx.$slots.default[0].children)
  // console.log(ctx.$slots.default[0].children[0])
  //  onMounted(()=> {
  //   console.log("5555555555555555555");
    //  getAllUsersReq().then(res=>{
    // console.log(res);
    // console.log(tableData);
      //  console.log(res.data);
      //  console.log("fffff111111111");
        //console.log(res);
        // console.log(tableData);
        //     tableData.push(res.data);
        //     console.log(tableData);
          
          
        // }).catch(error => { console.log("77777777777777"); console.log(error) }) 


// })









  </script>
  
  <style>
  .demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
.demo-form-inline .el-input {
  --el-input-width: 220px;
}



  .el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
  }
  .el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
  </style>