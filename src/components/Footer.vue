<template>
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
</template>



<script>

export default {
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
      ]
  })
};
</script>