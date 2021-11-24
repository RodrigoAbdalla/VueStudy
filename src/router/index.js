import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DeletedTasks from '../views/DeletedTasks.vue'
import DoneTasks from '../views/DoneTasks.vue'
import PendingTasks from '../views/PendingTasks.vue'
import Credits from '../views/Credits.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/deletedtasks',
      name: 'DeletedTasks',
      component: DeletedTasks
    },
    {
      path: '/donetasks',
      name: 'DoneTasks',
      component: DoneTasks
    },
    {
      path: '/pendingtasks',
      name: 'PendingTasks',
      component: PendingTasks
    },
    {
      path: '/credits',
      name: 'Credits',
      component: Credits
    }
  ]
})
