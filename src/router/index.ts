import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/tasks',
    name: 'task',
    component: () => import('@/components/TaskList.vue'),
},
{
    path: '/tasks/new',
    name: 'task-new',
    component: () => import('@/components/TaskForm.vue'),
},
{
    path: '/tasks/:id',
    name: 'task-details',
    component: () => import('@/components/TaskDetail.vue'),
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
