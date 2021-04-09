import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/pages/auth/Login.vue')
const Home = () => import('@/pages/home/Home.vue')

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/login',
  name: 'Login',
  component: Login
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
