<template>
  <v-app>

            <v-system-bar
      app
      window
      fixed = false
    >
      <v-icon>mdi-message</v-icon>
      <span>Create your first task to begin</span>
      <v-spacer></v-spacer>
      
      <v-btn
        target="_blank"
        text rounded
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-system-bar>

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
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Creditos</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-footer
    padless
    app
    text rounded
  >
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.id"
          class="mx-4 white--text"
          icon
          :href="icon.link"
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Este projeto foi feito com o intuito de estudar VUE e VUETIFY e serve como entrega de uma atividade do curso "Desenvolvimento de Aplicaçãoes para WEB"
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-footer>

  <v-bottom-navigation
    :value="value"
    color="teal"
    grow
    app
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>

        <router-view></router-view>
  </v-app>
</template>



<script>

export default {
  name: 'App',

  data: () => ({
    icons: [
        {
          id: 1,
          name: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/rodrigo-abdalla-83511a163/'
        },
        {
          id: 2,
          name: 'mdi-instagram',          
          link: 'https://www.instagram.com/rodrigo.abdalla/'
        },
        {
          id: 3,
          name: 'mdi-github',
          link: 'https://github.com/RodrigoAbdalla'
        }
      ],
    drawer: false,
    group: null,
    value: 1
  }),
  methods: {
    toggleTheme(){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
   watch: {
      group () {
        this.drawer = false
      },
    }
};
</script>