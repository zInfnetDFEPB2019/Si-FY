<template>
  <div id="container">
    <Sidebar />
    <Footer />
    <div id="items-container">
      <h1>PlayList</h1>
      <v-row>
        <v-col cols="3" v-for="n in 8" :key="n">
          <PlaylistCard title="Playlist Songs" image="https://cdn.vuetifyjs.com/images/cards/road.jpg" />
        </v-col>
      </v-row>
      <h2>Classificação</h2>
      <v-row>
        <v-col cols="3" v-for="n in 4" :key="n">
          <PlaylistCard title="Top 50 Songs" image="https://a0.typepad.com/6a0111683c7a25970c0148c6d1b300970c-600wi" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import PlaylistCard from "../components/PlaylistCard.vue";
export default {
  name: "Playlist",
  components: {
    Sidebar,
    Footer,
    PlaylistCard
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
