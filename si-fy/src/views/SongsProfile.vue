<template>
  <div id="container">
    <Sidebar />

    <div class="itemsContainer">
      <h1 v-if="trackList.length == 0">No Saved Songs</h1>
      <h1 v-else>Saved Songs</h1>
      <v-row>
        <v-col cols="3" v-for="track in trackList" :key="track.id">
          <div v-on:click="playMusic(track)">
            <Card :title="track.name" :image="track.album.images[0].url" />
          </div>
        </v-col>
      </v-row>
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import Card from "../components/Card.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "SongsProfile",
  components: {
    Sidebar,
    Footer,
    Card
  },
  computed: {
    ...mapGetters(["player", "trackList"])
  },
  methods: {
    ...mapActions(["setPlay", "addTrack"]),

    async playMusic(track) {
      const play = ({
        spotify_uri,
        playerInstance: {
          _options: { getOAuthToken, id }
        }
      }) => {
        getOAuthToken(access_token => {
          this.api
            .search(access_token)
            .put(
              `me/player/play?device_id=${id}`,
              JSON.stringify({ uris: [spotify_uri] })
            )
            .then(() => {
              this.setPlay("stop");
              this.addTrack(track);
            })
            .catch(() => {});
        });
      };

      play({
        playerInstance: this.player,
        spotify_uri: track.uri
      });
    }
  }
};
</script>

<style scoped>
.itemsContainer {
  margin-left: 250px;
  margin-top: 5px;
  margin-bottom: 100px;
}
.itemsContainer h1,
h2 {
  color: white;
}
</style>
