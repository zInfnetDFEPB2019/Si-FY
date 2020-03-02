<template>
  <div id="container">
    <Sidebar />
    <Footer />
    <div id="items-container">
      <v-row>
        <v-col cols="4" v-for="n in 18" :key="n">
          <HomeCard title="n.Song" image="https://cdn.vuetifyjs.com/images/cards/store.jpg" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import HomeCard from "../components/HomeCard.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    Footer,
    HomeCard
  }
};
</script>

<style scoped>
#items-container {
  margin-left: 250px;
  margin-top: 5px;
  margin-bottom: 100px;
}
</style>
