<template>
  <div id="container">
    <Sidebar />
    
    <div v-for="playlist in playlists" :key="playlist.id">
      <h1 class="headline grey--text text--lighten-2 categorieTitle">{{playlist.name}}</h1>
      <router-link size="sm" class="mr-1 btn btn-link categorieBtn" 
        :to="{ name: 'Playlist', params: { id: playlist.id }}"
        > Ver mais </router-link>

      <div class="items-container">
        <v-layout align-content-start class="layout-item-container">
          <div v-for="tracks in playlist.items" :key="tracks.id" v-on:click="sendTracks(tracks.id)">
            <HomeCard :title= tracks.name :image= tracks.images[0].url />
          </div>
        </v-layout>
      </div>
    </div>
    <div style="height:100px"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import HomeCard from "../components/HomeCard.vue";
import Api from '../service/api';

export default {
  name: "Home",
  components: {
    Sidebar,
    Footer,
    HomeCard
  },
  data() {
    return {
      playlists: [],
      api: new Api(),
      nextPage: '/browse/categories',
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
      console.log(this.nextPage);
      
      if (this.nextPage != null || this.nextPage != undefined) {
        this.scrolledToBottom = false;
        this.isLoadingMore = true;

        this.api.getToken(localStorage.refresh_token).then(token => {
          this.getCategories(token.data.access_token);
          }).catch(() => {
            this.isLoadingMore = false;
        });
      }
    },

    getCategories(access_token) {
      this.api.search(access_token).get(this.nextPage)
          .then(categories => {
            this.nextPage = categories.data.categories.next;
            this.isLoadingMore = false;
            this.scrolledToBottom = true; 
              
    
            categories.data.categories.items.forEach((item) => {
              this.getPlaylist(access_token, item);
            });
          }).catch(() => {
            this.isLoadingMore = false;
          })
    },

    getPlaylist(access_token, item) {
      this.api.search(access_token).get(`/browse/categories/${item.id}/playlists`)
        .then(categorie => {
          if (categorie.data.playlists.items.length > 0) {
            categorie.data.playlists.name = item.name;
            categorie.data.playlists.id = item.id;
            this.playlists.push(categorie.data.playlists);
          }
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
.categorieTitle {
  margin-top: 20px;
  margin-left: 220px;
}
.categorieBtn {
  margin-left: 350px;
}
.items-container {
  margin-left: 190px; 
  display:-webkit-flex;
  overflow-y: scroll;
}
::-webkit-scrollbar { 
    display: none; 
}
.layout-item-container {
  margin-left: 16px;
}
</style>
