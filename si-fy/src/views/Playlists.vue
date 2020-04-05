<template>
  <div id="container">
    <Sidebar />
    <div class="itemsContainer">
      <v-btn class="btnLogin" v-on:click="createPlaylist">Create Playlist</v-btn>
      <h1 v-if="playlists.length == 0" class="divTitle headline grey--text text--lighten-2">
        {{playlists}}
        Nenhuma playlist encontrada
      </h1>
      <v-row>
        <v-col cols="3" v-for="playlist in playlists" :key="playlist.id">
          <div v-on:click="goToPlaylist(playlist.id)">
            <Card :title="playlist.name" v-if="playlist.images[0]" :image="playlist.images[0].url" />
            <Card :title="playlist.name" v-else />
          </div>
        </v-col>
      </v-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Api from "../service/api";

const api = new Api();

export default {
  name: "Playlists",
  data() {
    return {
      userId: "",
      playlists: []
    };
  },
  methods: {
    goToPlaylist(id) {
      this.$router.push({ name: "Track", params: { id } });
    },
    createPlaylist() {
      this.$router.push({ name: "CreatePlaylist" });
    },
    async getUserPlaylists() {
      const token = (await api.getToken(localStorage.refresh_token)).data
        .access_token;

      this.playlists = (
        await api.search(token).get("/me/playlists")
      ).data.items;
    }
  },
  computed: mapGetters(["getUserId"]),
  beforeMount() {
    (async () => await this.getUserPlaylists())();
  },
  components: {
    Sidebar,
    Footer,
    Card
  }
};
</script>

<style scoped>
.itemsContainer {
  margin-left: 250px;
}
</style>