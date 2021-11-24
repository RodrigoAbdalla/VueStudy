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
      flat
      >
        <div
          v-for="task in this.$store.state.tasks"
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
    newTaskTitle: '',
  }),
  methods: {
    doneTask(id){
      let task = this.$store.state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(id){
      this.$store.state.deletedTasks.push(this.$store.state.tasks.filter(task => task.id === id))
      this.$store.state.tasks = this.$store.state.tasks.filter(task => task.id !== id)
    },
    createTasks(){
      if(this.newTaskTitle!=""){
        let newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          done: false
        }
        this.$store.state.tasks.push(newTask)
        this.newTaskTitle = ''
        }
    }
  }
};
</script>