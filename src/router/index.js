import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Get',
    component: () => import('../views/Get.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/Post.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
