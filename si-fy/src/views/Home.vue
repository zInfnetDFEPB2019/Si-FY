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
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import HomeCard from "../components/HomeCard.vue";
//import Api from '../service/api'

export default {
  mounted() {
    // Exemplo de chamada a api
    // const api = new Api();
    
    // api.getToken(localStorage.refresh_token).then(response => {
    //   api.search(response.data.access_token).get('/browse/categories')
    //     .then(response1 => {
    //       console.log(response1.data);
    //     }).catch((error) => {
    //       console.log(error.response)
    //     })
    //   }).catch((error) => {
    //     console.log(error.response);
    // });
  },
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
