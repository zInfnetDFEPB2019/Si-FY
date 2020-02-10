import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlists: [],
  },
  mutations: {
    addPlaylist(state, playlist) {
      state.playlists.push(playlist)
    },
    deletePlaylist(state, playlist) {
      state.playlists = state.playlists.filter(obj => obj.id !== playlist.id)
    },
  },
  actions: {},
  modules: {}
});
