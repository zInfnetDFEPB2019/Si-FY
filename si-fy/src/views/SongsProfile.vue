<template>
  <div id="container">
    <Sidebar />
    <Footer />
    <div id="items-container">
      <h1>Songs Profile</h1>
      <v-row>
        <v-col cols="3" v-for="n in 8" :key="n">
          <Card title="Songs Profile" image="https://cdn.vuetifyjs.com/images/cards/road.jpg" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import Card from "../components/Card.vue";
export default {
  name: "SongsProfile",
  components: {
    Sidebar,
    Footer,
    Card
  }
};
</script>

<style scoped>
#items-container {
  margin-left: 250px;
  margin-top: 5px;
  margin-bottom: 100px;
}
#items-container h1, h2{
  color: white;
}

</style>