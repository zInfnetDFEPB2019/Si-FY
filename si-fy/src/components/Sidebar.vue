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
        <router-link :to="item.to"><v-list-item-title><v-icon>{{ item.icon }}</v-icon>{{ item.text }}</v-list-item-title>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      list_items: [
        { icon: "music_note", text: "Home", to:"/" },
        { icon: "music_note", text: "Songs", to: "/songsprofile" },
        { icon: "music_note", text: "Playlists", to: "/playlistprofile" },
        { icon: "music_note", text: "Artists", to: "/artistsprofile" },
        { icon: "music_note", text: "Albums", to: "/albumsprofile" },
        { icon: "music_note", text: "Podcasts", to: "/podcastprofile" },
        { icon: "logout", text: "Logout" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped></style>
