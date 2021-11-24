<template>
    <v-container fill-height fluid app>
    <v-row align="center"
        justify="center">
        <v-col>
            <v-container
      class="spacing-playground pa-16"
      >
          <v-card
    class="mx-auto"
    max-width="344"
    
  >
    <v-img
      src="https://avatars.githubusercontent.com/u/65426820?v=4"
      height="200px"
    ></v-img>

    <v-card-title>
      Rodrigo Abdalla
    </v-card-title>

    <v-card-subtitle>
        Estudante de programação na FACENS.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="show = !show"
      >
        READ MORE
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Olá, me chamo Rodrigo!
            Estou atualmente cursando o 6° semestre de engenharia 
            da computação e sou apaixonado por programação.
            Este projeto foi desenvolvido durante a disciplina de "Desenvolvimento de Aplicações para WEB", cursada pelo professor "Marc Gonzalez". 
            O objetivo dele é aprender mais sobre as ferramentas Vue e Vuetify, assim como se aperfeiçoar em front-end. 
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-container>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>