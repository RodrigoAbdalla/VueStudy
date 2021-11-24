<template>
    <v-bottom-navigation
    color="teal"
    grow
    app
  >

    <v-btn
      :href="githubLink"
    >
      <span>Source Code</span>
      <v-icon>mdi-code-tags</v-icon>
    </v-btn>

    <v-btn
      link @click="$router.push({ path: '/credits' })"
    >
      <span>Credits</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>

  </v-bottom-navigation>

</template>


<script>

export default {
  data: () => ({
    githubLink: "https://github.com/RodrigoAbdalla/VueStudy"
  })
};
</script>
