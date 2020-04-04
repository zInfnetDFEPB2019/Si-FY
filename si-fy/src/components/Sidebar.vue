<template>
  <v-navigation-drawer
    style="height: 100%;width: 200px;"
    app
    permanent
    dark
    color="#404040"
    padless
  >
    <v-img class="imageTile"
      src="https://www.resultatec.com.br/wp-content/uploads/2019/10/Fundo-Verde-1140x682@2x.png">
      <h1 class="title">Si-FY Project</h1>
    </v-img>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link v-for="item in list_items" :key="item">
        <router-link class="router" :to="item.to">
          <div>
            <v-icon>
              {{ item.icon }}
            </v-icon>
            <span class="routerName">
              {{ item.text }}
            </span>
          </div>
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
        { icon: "home", text: "Home", to:"/" },
        { icon: "music_note", text: "Songs", to: "/songsprofile" },
        { icon: "logout", text: "Logout", to: "/logout" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.imageTile{
  height: 250px;
}

.title{
  color: white;
  margin: 16px;
  margin-top: 215px;
}

.router{
  color: white;
  text-decoration: none;
}

.routerName{
  margin: 10px;
  margin-top: 1px;
}
</style>
