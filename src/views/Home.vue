<template>
  <v-app>
      
      <v-content
      app
     >
      <v-text-field
      v-model="newTaskTitle"
        class = "pa-3"
        outlined
        label="Add Task"
        append-icon="mdi-plus"
        hide-details
        clearable
        @click:append="createTasks"
        @keyup.enter="createTasks"
      >

      </v-text-field>

      <v-list
      class="pt-0"
      >
        <div
          v-for="task in myTasks"
          :key="task.id"
        >
          <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'green lighten-3' : task.done}"
          >
              <template v-slot:default>
                <v-list-item-action>
                  <v-checkbox :input-value="task.done"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content
                  :class="{ 'text-decoration-line-through':task.done}"
                >
                  <v-list-item-title>
                    {{task.title}}
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                <v-btn 
                  @click.stop="deleteTask(task.id)"
                  icon
                  tile
                >
                
                  <v-icon color="primary lighten-1">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
              </template>
              
              


            </v-list-item>
            <v-divider></v-divider>
          </div>


      </v-list>
      

        
     </v-content>
  </v-app>
</template>


<script>
export default {
  name: 'App',
  data: () => ({
    // Add task field
    newTaskTitle: '', 
  }),
  computed:{
    myTasks(){
      // Colect my tasks in store
      return this.$store.getters.myTasks
    }
  },
  methods: {
    // Complete the task
    doneTask(id){
      let task = this.$store.state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },

    // Delete the task
    deleteTask(id){
      let task = this.$store.state.tasks.filter(task => task.id === id)[0]
      task.deleted = true
    },

    // Create the new task
    createTasks(){
      if(this.newTaskTitle!=""){
        let newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          done: false,
          deleted: false
        }
        this.$store.state.tasks.push(newTask)
        this.newTaskTitle = ''
        }
    }
  },

  // Will colect 2 books from book API
  async created(){
    this.$store.dispatch("fetchBooks")
  }
};
</script>