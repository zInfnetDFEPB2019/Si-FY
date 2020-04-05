<template>
  <div class="editContainer">
    <Sidebar />
    <form v-on:submit.prevent="updatePlaylist">
      <div class="formContainer">
        <div class="formItem">
          <h2>New Playlist Name:</h2>
          <input type="text" class="input" v-model="playlist.name" placeholder="New Playlist name" />
        </div>
        <div class="formItem">
          <v-btn class="btnLogin" type="submit">Edit Playlist</v-btn>
        </div>
      </div>
    </form>
    <v-btn class="btnLogin">
      <router-link
        tag="track"
        :to="{name: 'Track', params: {id: this.playlist.id}}"
      >Return to Playlist</router-link>
    </v-btn>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default {
  name: "EditPlaylist",
  data() {
    return {
      playlist: {
        id: this.$route.params.id,
        name: ""
      }
    };
  },
  methods: {
    ...mapActions(["editPlaylist"]),
    updatePlaylist() {
      this.editPlaylist(this.playlist);
      this.$router.push({
        name: "Track",
        params: { id: this.$route.params.id }
      });
    }
  },
  components: {
    Sidebar,
    Footer
  }
};
</script>

<style scoped>
.editContainer {
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