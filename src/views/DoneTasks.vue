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
          v-for="task in doneTasks"
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
                  @click.stop="undoneTask(task.id)"
                >
                UNDONE
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
        // Colect my complete tasks in store
        doneTasks(){
            return this.$store.getters.doneTasks
        }
         
    },
  methods: {
    // Change the "done" attribute
    undoneTask(id){
        let task = this.$store.state.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
  }}
};
</script>
