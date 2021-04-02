import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('@/pages/auth/Login.vue')
const Home = () => import('@/pages/home/Home.vue')

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home }
]

export default new VueRouter({ routes })
