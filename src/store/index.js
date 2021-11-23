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
