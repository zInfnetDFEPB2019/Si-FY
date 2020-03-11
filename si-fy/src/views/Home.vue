<template>
  <div id="container">
    <Sidebar />
    
    <div v-for="playlist in playlists" :key="playlist.id">
      <h1 class="headline grey--text text--lighten-2 categorieTitle">{{playlist.name}}</h1>
      
      <div class="items-container">
        <v-layout align-content-start class="layout-item-container">
          <HomeCard v-for="music in playlist.items" :key="music.id" :title= music.name :image= music.images[0].url />
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
import Api from '../service/api'

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
      scrolledToBottom: true, // make sure it's set to true
      isLoadingMore: null,
    }
  },
  mounted() {
    this.getToken();
    this.scrollY();
  },
  methods: {
    getToken() {
      if (this.nextPage != null || this.nextPage != undefined) {
        this.scrolledToBottom = false;
        this.isLoadingMore = true;

        this.api.getToken(localStorage.refresh_token).then(token => {
          this.getCategories(token.data.access_token);
          }).catch((error) => {
            this.isLoadingMore = false
            console.log(error.response);
        });
      }
    },

    getCategories(access_token) {
      this.api.search(access_token).get(this.nextPage)
          .then(categories => {
            this.nextPage = categories.data.categories.next;
            console.log(this.nextPage);
            console.log(categories.data);
            this.isLoadingMore = false
            this.scrolledToBottom = true 
              
    
            categories.data.categories.items.forEach((item) => {
              this.getPlaylist(access_token, item);
            });
          }).catch((error) => {
            this.isLoadingMore = false
            console.log(error.response)
          })
    },

    getPlaylist(access_token, item) {
      this.api.search(access_token).get(`/browse/categories/${item.id}/playlists`)
        .then(categorie => {
          if (categorie.data.playlists.items.length > 0) {
            categorie.data.playlists.name = item.name;
            this.playlists.push(categorie.data.playlists);
          }
        }).catch((error) => {
          this.isLoadingMore = false
          console.log(error.response)
        })
    },

    scrollY() {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) 
            + window.innerHeight === document.documentElement.offsetHeight

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
