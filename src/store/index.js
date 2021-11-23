import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Drink Water',
        done: false
      },
      {
        id: 2,
        title: 'Sleep 8 hours',
        done: false
      }
    ],
    deletedTasks: [

    ],
    views: [
      {
        id: 1,
        title: 'Home',
        route: '/',
        image: 'mdi-home'
      },
      {
        id: 2,
        title: 'Deleted Tasks',
        route: '/deletedtasks',
        image: 'mdi-delete'
      },
      {
        id: 3,
        title: 'Done Tasks',
        route: '/donetasks',
        image: 'mdi-check'
      },
      {
        id: 4,
        title: 'Pending tasks',
        route: '/pendingtasks',
        image: 'mdi-account-clock'
      }
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    
  }

})
