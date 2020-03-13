import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Playlist from "../views/Playlist.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // mode: 'hash',
  routes: [
      { path: '/', name : "home" , component: Home },
      { path: '/playlist', name : "playlist", component: Playlist },
  ]
})