import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisteruserView.vue'
import ViewTask from '../views/task/HomeView.vue'
import AddTask from '../views/task/AddTask.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/task/',
    name: 'viewtasks',
    component: ViewTask
  },
  {
    path: '/task/addtask',
    name: 'addtask',
    component: AddTask
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
