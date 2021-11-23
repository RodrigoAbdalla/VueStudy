<template>
<div>
    <v-app-bar
      app
      color="primary"
      text rounded
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div>TO DO LIST</div>
      <v-spacer></v-spacer> 

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn @click="toggleTheme" text rounded>Toggle theme</v-btn>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer" clipped
      absolute
      temporary
    >
    
        
          <v-list-item
            v-for="view in this.$store.state.views"
          :key="view.id" 
          link @click="$router.push({ path: view.route })"
          >
              <v-list-item-action>
                <v-icon>{{view.image}}    </v-icon>
            </v-list-item-action>
              <v-list-item-content>
                  
                  <v-list-item-title > {{view.title}}</v-list-item-title>
                </v-list-item-content>
             </v-list-item>

    </v-navigation-drawer>
</div>
        

</template>


<script>


export default {
  data(){
    return{
        drawer: false,
        group: null,
        value: 1
    }
  },
      methods: {
        toggleTheme(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        toggleDrawer(){
            this.$store.state.drawer = !this.$store.state.drawer
        }
  },
  watch: {
      group () {
        this.drawer = false
      },
    }
};
</script>