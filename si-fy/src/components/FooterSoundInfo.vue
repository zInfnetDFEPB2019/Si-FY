<template>
  <div class="on-playing-sound-info" style="minWidth:160px">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-icon
            v-if="isMuted == false"
            v-on:click="mute_unmute()"
            icon="volume-up-fill"
            id="player-icon"
          />
          <b-icon v-else v-on:click="mute_unmute()" icon="volume-mute-fill" id="player-icon" />
        </b-col>
        <b-col>
          <b-form-input id="range-2" v-model="value" type="range" min="0" max="100" step="2"></b-form-input>
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
      isMuted: false
    };
  },
  methods: {
    mute_unmute: function() {
      if (this.isMuted == true) {
        this.isMuted = false;
      } else this.isMuted = true;
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
