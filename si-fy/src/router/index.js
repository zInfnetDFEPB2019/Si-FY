import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Callback from "../views/Callback.vue";
import Playlist from "../views/Playlist.vue";
import Track from "../views/Track.vue";
import SongsProfile from "../views/SongsProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/callback",
    name: "Callback",
    component: Callback,
  },
  {
    path: "/playlist/:id",
    name: "Playlist",
    component: Playlist
  },
  {
    path: "/track/:id",
    name: "Track",
    component: Track
  },
  {
    path: "/songsprofile",
    name: "SongsProfile",
    component: SongsProfile
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
