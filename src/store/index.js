import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Drink Water',
        done: false,
        deleted: false
      },
      {
        id: 2,
        title: 'Sleep 8 hours',
        done: false,
        deleted: false
      },
      {
        id: 3,
        title: 'Go to gym',
        done: false,
        deleted: false
      },
      {
        id: 4,
        title: 'Play soccer',
        done: false,
        deleted: false
      },
      {
        id: 5,
        title: 'Wake up 6 am',
        done: false,
        deleted: false
      },
      {
        id: 6,
        title: 'Wash the dish',
        done: false,
        deleted: false
      },
      {
        id: 7,
        title: 'Get 10 in math',
        done: false,
        deleted: false
      },
      {
        id: 8,
        title: 'Create a video on Tiktok',
        done: false,
        deleted: false
      },
      {
        id: 9,
        title: null,
        done: false,
        deleted: false
      },
      {
        id: 10,
        title: null,
        done: false,
        deleted: false
      }
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
    SET_BOOKS(state, payload){
      // Add two books that were collected in the Book API to the task list  
      state.tasks[8].title = "Start reading " + (payload[0].title) 
      state.tasks[9].title = "Start reading " + (payload[1].title)
    }
  },
  actions: {
    fetchBooks({commit}){

      // The OpenLibrary API returns books that are on my list. Can be changed to your list on the OpenLibrary website 
       axios.get('https://openlibrary.org/people/rodrigoabdalla/lists/OL203297L/editions.json')
        .then(res=>{
          const payload = res.data.entries
          commit('SET_BOOKS', payload)
        })
        .catch(err=>{console.log(err)})
    }
  },
  modules: {
  },
  getters:{
    // Returns all avaiable tasks (not deleted)
    myTasks(state){
      return state.tasks.filter(task => task.deleted === false)
    },

    // Returns all done tasks
    doneTasks(state){
      return state.tasks.filter(task => task.done === true)
    },

    // Returns all pending tasks
    pendingTasks(state){
      return state.tasks.filter(task => task.done === false)
    },

    // Returns all deleted tasks
    deletedTasks(state){
      return state.tasks.filter(task => task.deleted === true)
    }
  }

})
