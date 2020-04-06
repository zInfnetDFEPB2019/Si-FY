<template>
  <div class="itemsContainer">
    <Sidebar />
    <form v-on:submit.prevent="addPlaylist">
      <div class="formContainer">
        <div class="formItem">
          <h2>Playlist Name:</h2>
          <input type="text" class="input" v-model="playlist.name" placeholder="Playlist name" />
        </div>
        <div class="formItem">
          <v-btn class="btnLogin" type="submit">Create Playlist</v-btn>
        </div>
      </div>
    </form>
    <v-btn class="btnLogin" v-on:click="goToPlaylists()">Return to Playlists</v-btn>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default {
  name: "CreatePlaylist",
  data() {
    return {
      playlist: {
        name: ""
      }
    };
  },
  methods: {
    ...mapActions(["createPlaylist"]),
    addPlaylist() {
      this.createPlaylist(this.playlist);
      this.$router.push({ name: "Playlists" });
    },
    goToPlaylists() {
      this.$router.push({ name: "Playlists" });
    }
  },
  components: {
    Sidebar,
    Footer
  }
};
</script>

<style scoped>
.itemsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 250px;
}

form {
  display: flex;
  flex-direction: column;
}

form * {
  margin: 0.5rem;
}

form .formItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  border: 1px solid #111111;
}
</style>