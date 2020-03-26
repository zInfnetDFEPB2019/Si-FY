<template>
  <v-navigation-drawer
    style="height: 100%;width: 200px;"
    app
    permanent
    dark
    color="#404040"
    padless
  >
  <router-link to="/">
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
 </router-link>
    <v-divider></v-divider>
    <v-list nav dense > 
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
        { icon: "music_note", text: "Playlists", to: '/playlist' },
        { icon: "music_note", text: "Songs", to:'/songs' },
        { icon: "music_note", text: "Artists", to: '/artist' },
        { icon: "music_note", text: "Albums", to: '/album' },
        { icon: "music_note", text: "Podcasts", to: '/podcast' }, 
        { icon: "logout", text: "Logout", to: '/logout' }
      ]
    };
  },
  methods: {
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a .v-list-item__title {
  color: whitesmoke;
}
</style>
