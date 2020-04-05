<template>
  <div id="container">
    <Sidebar />

    <div class="itemsContainer">
      <router-view></router-view>
      <v-btn class="btnLogin" v-on:click="editPlaylist">Edit Playlist</v-btn>
      <h1 v-if="tracks.length == 0" class="divTitle headline grey--text text--lighten-2">Carregando</h1>
      <v-row>
        <v-col cols="3" v-for="playlist in tracks" :key="playlist.id">
          <div v-on:click="playMusic(playlist.track)">
            <Card :title="playlist.track.name" :image="playlist.track.album.images[0].url" />
          </div>
        </v-col>
      </v-row>
    </div>

    <div style="height:100px"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import Card from "../components/Card.vue";
import Api from "../service/api";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tracks",
  components: {
    Sidebar,
    Footer,
    Card
  },
  data() {
    return {
      tracks: [],
      errorMessage: "",
      playerState: "",
      api: new Api(),
      nextPage: `playlists/${this.$route.params.id}`,
      scrolledToBottom: true,
      isLoadingMore: null
    };
  },
  mounted() {
    if (
      localStorage.refresh_token == null ||
      localStorage.refresh_token == undefined
    )
      this.$router.push("/login");

    this.getToken();
    this.scrollY();
  },
  computed: {
    ...mapGetters(["player"])
  },
  methods: {
    ...mapActions(["addTrack", "setPlay"]),

    getToken() {
      if (this.nextPage != null || this.nextPage != undefined) {
        this.scrolledToBottom = false;
        this.isLoadingMore = true;

        this.api
          .getToken(localStorage.refresh_token)
          .then(token => {
            this.getTracks(token.data.access_token);
          })
          .catch(() => {
            this.isLoadingMore = false;
          });
      }
    },

    getTracks(access_token) {
      this.api
        .search(access_token)
        .get(this.nextPage)
        .then(categorie => {
          this.isLoadingMore = false;
          this.scrolledToBottom = true;
          if (categorie.data.tracks.items instanceof Array)
            this.tracks = this.tracks.concat(categorie.data.tracks.items);
          else this.tracks.push(categorie.data.tracks.items);
        })
        .catch(() => {
          this.isLoadingMore = false;
        });
    },

    scrollY() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight >=
          document.documentElement.offsetHeight - 10;

        if (bottomOfWindow) {
          if (this.scrolledToBottom) {
            this.getToken(1);
          }
        }
      };
    },

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
    },

    editPlaylist() {
      this.$router.push({
        name: "EditPlaylist"
      });
    }
  }
};
</script>

<style scoped>
.itemsContainer {
  margin-left: 250px;
}
</style>
