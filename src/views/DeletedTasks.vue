<template>
  <v-app>
      <div app> HEYYYYYYYYYY</div>
      <v-content
      app
     >

      <v-list
      class="pt-0"
      flat
      >
        <div
          v-for="task in this.$store.state.deletedTasks"
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
              </template>
              
              


            </v-list-item>
            <v-divider></v-divider>
          </div>


      </v-list>
      

        
     </v-content>
  </v-app>
</template>

