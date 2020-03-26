<template>
  <div id="container">
    <Sidebar />

    <div id="items-container" class="items-container">
      <v-row>
        <v-col cols="3" v-for="playlist in playlists" :key="playlist.id">
          <div v-on:click="sendTracks(playlist.id)">
            <HomeCard :title= playlist.name :image= playlist.images[0].url />
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
import HomeCard from "../components/HomeCard.vue";
import Api from '../service/api'

export default {
  name: "Playlist",
  components: {
    Sidebar,
    Footer,
    HomeCard
  },
  data() {
    return {
      playlists: [],
      api: new Api(),
      nextPage: `/browse/categories/${this.$route.params.id}/playlists`,
      scrolledToBottom: true,
      isLoadingMore: null,
    }
  },
  mounted() {
    if (localStorage.refresh_token == null 
        || localStorage.refresh_token == undefined) this.$router.push('/login');

    this.getToken();
    this.scrollY();
  },
  methods: {
    sendTracks(idTrack) {
        this.$router.push({name: 'Track', params: {id: idTrack}});
    },

    getToken() {
      if (this.nextPage != null || this.nextPage != undefined) {
        this.scrolledToBottom = false;
        this.isLoadingMore = true;

        this.api.getToken(localStorage.refresh_token).then(token => {
          this.getPlaylist(token.data.access_token);
        }).catch(() => {
          this.isLoadingMore = false;
        });
      }
    },

    getPlaylist(access_token) {
      this.api.search(access_token).get(this.nextPage)
        .then(categorie => {
            this.nextPage = categorie.data.playlists.next;
            this.isLoadingMore = false;
            this.scrolledToBottom = true; 

            if ( categorie.data.playlists.items instanceof Array )
                this.playlists = this.playlists.concat( categorie.data.playlists.items );
            else
                this.playlists.push( categorie.data.playlists.items );
        }).catch(() => {
          this.isLoadingMore = false;
        })
    },

    scrollY() {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) 
            + window.innerHeight >= document.documentElement.offsetHeight - 10;
        
        if (bottomOfWindow) {
          if (this.scrolledToBottom) {
            this.getToken();
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.items-container {
  margin-left: 250px;
}
</style>
