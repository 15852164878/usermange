<template>
 <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-scrollbar>
</template>

<script lang="ts" setup>
  import { ref,reactive, onMounted, onUpdated ,getCurrentInstance,defineProps } from 'vue';
  import { registerUser, registerRules } from "@/utils/registerValidators";
  import {tableRowClassName,tableData} from "@/utils/userValidators";
  import {getAllUsersReq} from "../api/users";
import router from "@/router";
</script>