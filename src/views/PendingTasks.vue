<template>
  <v-app>
      <v-content
      app
     >
      <v-list
      class="pt-0"
      flat
      >
        <div
          v-for="task in pendingTasks"
          :key="task.id"
        >
          <v-list-item>
              <template v-slot:default>

                <v-list-item-content>
                  <v-list-item-title>
                    {{task.title}}
                  </v-list-item-title>
                </v-list-item-content>
                <v-spacer></v-spacer>
                
                <v-list-item-action>
                <v-btn 
                  @click.stop="completeTask(task.id)"
                >
                COMPLETE
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
    computed: {
      // Colect my pending tasks in store
        pendingTasks(){
            return this.$store.getters.pendingTasks
        }
         
    },
  methods: {
    // Change the "done" attribute
    completeTask(id){
        let task = this.$store.state.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
  }}
};
</script>
