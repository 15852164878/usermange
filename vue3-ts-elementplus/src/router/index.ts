import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/Ai',
    name: 'Ai',
    component: () => import('../views/Ai.vue')
  },
  
  {
    path: '/Users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  },{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
    {
      path:'/',
      name:'user',
      meta:{
      title:'用户管理'
      },
      component: () => import('../views/Users.vue'),
    }, 
    {
      path:'/rights',
      name:'rights',
      meta:{
      title:'权限'
      },
      component: () => import('../views/RightsManage.vue'),
    },
    {
      path:'/defaul',
      name:'默认',
      meta:{
      title:'默认'
      },
      component: () => import('../views/default.vue'),
    }
  ]

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
