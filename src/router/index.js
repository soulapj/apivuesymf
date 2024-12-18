import { createRouter, createWebHistory } from 'vue-router'
import RegisterApi from '@/views/RegisterApi.vue'
import LoginApi from '@/views/LoginApi.vue'
import PostsApi from '@/views/PostsApi.vue'
import DetailApi from '@/views/DetailApi.vue'
import CreatePostApi from '@/views/CreatePostApi.vue'
import ModifyPostApi from '@/views/ModifyPostApi.vue'

const routes = [
  {
    path: '/',
    name: 'register',
    component: RegisterApi,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginApi,
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsApi,
  },
  {
    path: '/post/:id',
    name: 'details',
    component: DetailApi,
  },
  {
    path: '/add',
    name: 'ajouter',
    component: CreatePostApi,
  },
  {
    path: '/edit/:id',
    name: 'modifier',
    component: ModifyPostApi,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
