import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
  { 
    path: '/', 
    component: () => import('../views/home/index.vue')
  },
  // {
  //   path: '/about', 
  //   component: About 
  // },
]

const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router