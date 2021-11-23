<template>
  <v-app>

    <SystemBar></SystemBar>
    <AppBar></AppBar>
    <Footer></Footer>
    <BottomNavigation></BottomNavigation>
  
    <router-view></router-view>
    
  </v-app>
</template>



<script>
import AppBar from "@/components/AppBar"
import Footer from "@/components/Footer"
import BottomNavigation from "@/components/BottomNavigation"
import SystemBar from "@/components/SystemBar"

export default {
  name: 'App',
  components:{
    AppBar,
    Footer,
    SystemBar,
    BottomNavigation
  },
  created() {
      this.computedCurrentDomain = this.currentDomain
   }
};
</script>