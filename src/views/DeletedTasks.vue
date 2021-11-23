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
          v-for="task in this.$store.state.deletedTasks"
          :key="task[0].id"
        >
          <v-list-item>
              <template v-slot:default>

                <v-list-item-content>
                  <v-list-item-title>
                    {{task[0].title}}
                  </v-list-item-title>
                </v-list-item-content>
                <v-spacer></v-spacer>
                
                <v-list-item-action>
                <v-btn 
                  @click.stop="restoreTask(task[0].id)"
                >
                RESTORE
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
  methods: {
    restoreTask(id){
        this.$store.state.tasks.push(this.$store.state.deletedTasks.filter(task => task[0].id === id)[0][0])
        this.$store.state.deletedTasks = this.$store.state.deletedTasks.filter(task => task[0].id !== id)
  }}
};
</script>
