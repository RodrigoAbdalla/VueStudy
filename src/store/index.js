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
      },
      {
        id: 3,
        title: 'Go to gym',
        done: false
      },
      {
        id: 4,
        title: 'Play soccer',
        done: false
      },
      {
        id: 5,
        title: 'Wake up 6 am',
        done: false
      },
      {
        id: 6,
        title: 'Wash the dish',
        done: false
      },
      {
        id: 7,
        title: 'Get 10 in math',
        done: false
      },
      {
        id: 8,
        title: 'Create a video on Tiktok',
        done: false
      },
      {
        id: 9,
        title: 'Run 10km',
        done: false
      },
      {
        id: 10,
        title: 'Clean the bedroom',
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
