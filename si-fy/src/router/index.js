import Vue from "vue";
import VueRouter from "vue-router";
import Callback from "../views/Callback.vue";
import CreatePlaylist from "../views/CreatePlaylist.vue";
import EditPlaylist from "../views/EditPlaylist.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Playlist from "../views/Playlist.vue";
import Playlists from "../views/Playlists.vue";
import SongsProfile from "../views/SongsProfile.vue";
import Track from "../views/Track.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    path: "/playlists/",
    name: "Playlists",
    component: Playlists,
  },
  {
    path: "/playlists/create",
    name: "CreatePlaylist",
    component: CreatePlaylist,
  },
  {
    path: "/playlist/:id",
    name: "Playlist",
    component: Playlist,
  },
  {
    path: "/track/:id",
    name: "Track",
    component: Track,
    children: [
      {
        path: "edit",
        name: "EditPlaylist",
        component: EditPlaylist,
      },
    ],
  },
  {
    path: "/songsprofile",
    name: "SongsProfile",
    component: SongsProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
