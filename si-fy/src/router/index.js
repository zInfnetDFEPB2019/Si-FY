import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Callback from "../views/Callback.vue";
import Playlist from "../views/Playlist.vue";
import Track from "../views/Track.vue";
import AlbumsProfile from "../views/AlbumsProfile.vue";
import ArtistsProfile from "../views/ArtistsProfile.vue";
import PodcastProfile from "../views/PodcastProfile.vue";
import SongsProfile from "../views/SongsProfile.vue";
import PlaylistProfile from "../views/PlaylistProfile.vue";

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
    path: "/albumsprofile",
    name: "AlbumsProfile",
    component: AlbumsProfile
  },
  {
    path: "/artistsprofile",
    name: "ArtistsProfile",
    component: ArtistsProfile
  },
  {
    path: "/podcastprofile",
    name: "PodcastProfile",
    component: PodcastProfile
  },
  {
    path: "/songsprofile",
    name: "SongsProfile",
    component: SongsProfile
  },
  {
    path: "/playlistprofile",
    name: "PlaylistProfile",
    component: PlaylistProfile
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
