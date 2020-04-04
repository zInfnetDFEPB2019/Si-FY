import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    player: '',
    track: '',
    trackList: [],
    play: 'play_arrow'
  },
  getters: {
    player: (state) => {return state.player;},
    track: (state) => {return state.track;},
    trackList: (state) => {return state.trackList},
    play: (state) => {return state.play;}
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
  },
  actions: {
    addPlayer: (context, player) => {
        setTimeout(function() {
            context.commit('addPlayer', player);
        }, 500);
    },
    addTrack: (context, track) => {
      context.commit('addTrack', track);
    },
    setVolume: (context, volume) => {
      context.commit('setVolume', volume);
    },
    pushTrackList: (context, track) => {
      context.commit('pushTrackList', track);
    },
    removeTrackList: (context, track) => {
      context.commit('removeTrackList', track);
    },
    setPlay: (context, play) => {
          context.commit('setPlay', play);
    },
  }
});
