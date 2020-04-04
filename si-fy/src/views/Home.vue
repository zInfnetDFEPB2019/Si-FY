<template>
  <div id="container">
    <Sidebar />
    
    <h1 v-if="playlists.length == 0" class="divTitle headline grey--text text--lighten-2">Carregando</h1>

    <div v-for="playlist in playlists" :key="playlist.id">
      <div class="divTitle">
        <h1 class="headline grey--text text--lighten-2">{{playlist.name}}</h1>
        <router-link size="sm" class="mr-1 btn btn-link categorieBtn" 
          :to="{ name: 'Playlist', params: { id: playlist.id }}"
        > Ver mais 
        </router-link>
      </div>

      <div class="itemsContainer customizedScrollbar">
        <v-layout align-content-start class="layoutItemContainer">
          <div v-for="tracks in playlist.items" :key="tracks.id" v-on:click="sendTracks(tracks.id)">
            <Card :title= tracks.name :image= tracks.images[0].url />
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
import Card from "../components/Card.vue";
import Api from '../service/api';

export default {
  name: "Home",
  components: {
    Sidebar,
    Footer,
    Card
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
.divTitle {
  margin-top: 20px;
  margin-left: 220px;
  display: flex;
}
.categorieBtn {
  margin-left: 16px;
  padding-top: 4px;
}
.itemsContainer {
  margin-left: 190px; 
  display:-webkit-flex;
  overflow-y: scroll;
  overflow-y: hidden;
}
.customizedScrollbar::-webkit-scrollbar { 
    width: 5px;
    height: 8px;
    overflow: auto;
    background-color: #aaa;
}
.customizedScrollbar::-webkit-scrollbar-thumb {
    background: #000; 
}
.layoutItemContainer {
  margin-left: 16px;
}
</style>
