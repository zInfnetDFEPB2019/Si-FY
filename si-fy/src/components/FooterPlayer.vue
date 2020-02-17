<template>
  <div class="player-info" style="minWidth:400px">
    <b-container class="bv-example-row">
      <b-row style="textAlign:center">
        <b-col>
          <b-icon icon="arrow-left-right" id="player-icon" />
        </b-col>
        <b-col>
          <b-icon icon="skip-end-fill" id="player-icon" />
        </b-col>
        <b-col>
          <b-icon
            v-if="isPlaying == true"
            v-on:click="play_stop()"
            icon="stop-fill"
            id="player-icon"
            class="music-status-stop"
          />
          <b-icon
            v-else
            v-on:click="play_stop()"
            icon="play-fill"
            id="player-icon"
            class="music-status-play"
          />
        </b-col>
        <b-col>
          <b-icon icon="skip-forward-fill" id="player-icon" />
        </b-col>
        <b-col>
          <b-icon icon="arrow-repeat" id="player-icon" />
        </b-col>
      </b-row>
      <b-row style="textAlign:center">
        <b-col>
          {0:00}
          <b-form-input id="range-2" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>
          {5:00}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      isPlaying: false
    };
  },
  methods: {
    play_stop: function() {
      if (this.isPlaying == true) {
        this.isPlaying = false;
      } else this.isPlaying = true;
    }
  }
};
</script>

<style scoped>
#player-icon {
  cursor: pointer;
  font-size: 30px;
}

#player-icon :hover {
  color: rgb(107, 212, 1);
}
</style>
