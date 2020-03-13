<template>
  <v-navigation-drawer
    style="height: 100%;width: 200px;"
    app
    permanent
    dark
    color="#404040"
    padless
  >
    <v-img src="https://randomuser.me/api/portraits/women/85.jpg">
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Sandra Adams</v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-img>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link v-for="item in list_items" :key="item">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title @click="showPlaylist">{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      list_items: [
        { icon: "music_note", text: "Songs" },
        { icon: "music_note", text: "Playlists" },
        { icon: "music_note", text: "Artists" },
        { icon: "music_note", text: "Albums" },
        { icon: "music_note", text: "Podcasts" },
        { icon: "logout", text: "Logout" }
      ]
    };
  },
  methods: {
    showPlaylist() {
    this.$router.push({name : "playlist"})
    }
  }
};
</script>

<style scoped></style>
