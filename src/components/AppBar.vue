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
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Deleted tasks</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Done tasks</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Pending tasks</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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