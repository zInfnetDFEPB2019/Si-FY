import Vue from "vue";
import Vuex from "vuex";
import Api from "../service/api";

const api = new Api();

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    player: "",
    track: "",
    trackList: [],
    play: "play_arrow",
    userId: "",
  },
  getters: {
    player: (state) => {
      return state.player;
    },
    track: (state) => {
      return state.track;
    },
    trackList: (state) => {
      return state.trackList;
    },
    play: (state) => {
      return state.play;
    },
    getUserId: (state) => state.userId,
  },
  mutations: {
    addPlayer(state, player) {
      state.player = player;
    },
    addTrack(state, track) {
      state.track = track;
    },
    setVolume(state, volume) {
      state.player.setVolume(volume).then(() => {});
    },
    pushTrackList(state, track) {
      if (!state.trackList.includes(track)) {
        state.trackList.push(track);
      }
    },
    removeTrackList(state, track) {
      const index = state.trackList.indexOf(track);
      if (index > -1) {
        state.trackList.splice(index, 1);
      }
    },
    setPlay(state, play) {
      state.play = play;
    },
    setUserId(state, id) {
      state.userId = id;
    },
  },
  actions: {
    addPlayer: (context, player) => {
      setTimeout(function() {
        context.commit("addPlayer", player);
      }, 500);
    },
    addTrack: (context, track) => {
      context.commit("addTrack", track);
    },
    setVolume: (context, volume) => {
      context.commit("setVolume", volume);
    },
    pushTrackList: (context, track) => {
      context.commit("pushTrackList", track);
    },
    removeTrackList: (context, track) => {
      context.commit("removeTrackList", track);
    },
    setPlay: (context, play) => {
      context.commit("setPlay", play);
    },
    async setUserId(context) {
      const token = (await api.getToken(localStorage.refresh_token)).data
        .access_token;

      const id = (await api.search(token).get("/me")).data.id;

      context.commit("setUserId", id);
    },
    async createPlaylist(context, playlist) {
      const token = (await api.getToken(localStorage.refresh_token)).data
        .access_token;

      await api.postPlaylist(token, this.getters.getUserId, playlist);
    },
    async editPlaylist(context, playlist) {
      const token = (await api.getToken(localStorage.refresh_token)).data
        .access_token;

      const { id, name } = playlist;

      const newPlaylist = {
        name,
      };

      await api.editPlaylist(token, id, newPlaylist);
    },
  },
});
