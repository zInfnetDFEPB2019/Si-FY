import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    player: '',
    track: '',
    play: 'play_arrow'
  },
  getters: {
    player: (state) => {return state.player;},
    track: (state) => {return state.track;},
    play: (state) => {return state.play;}
  },
  mutations: {
    addPlayer(state, player) {
      state.player = player;
    },
    addTrack(state, track) {
      state.track = track;
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
      setTimeout(function() {
          context.commit('addTrack', track);
      }, 500);
    },
    setPlay: (context, play) => {
          context.commit('setPlay', play);
    },
  }
});
