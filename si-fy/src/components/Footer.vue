<template>
  <div class="footer-container">
    <div id="teste">
      <FooterTrackinfo
        :on_playing_artist="on_playing_artist"
        :on_playing_music="on_playing_music"
        :actual_album_image="actual_album_image"
      />
    </div>
    <div id="testee">
      <FooterPlayer />
    </div>
    <div id="teste">
      <FooterSoundInfo />
    </div>
  </div>
</template>

<script>
import FooterTrackinfo from "./FooterTrackinfo.vue";
import FooterPlayer from "./FooterPlayer.vue";
import FooterSoundInfo from "./FooterSoundInfo.vue";

export default {
  components: {
    FooterTrackinfo,
    FooterPlayer,
    FooterSoundInfo
  },
  data() {
    return {
      actual_album_image: "https://placekitten.com/300/300",
      on_playing_music: "get nome musica",
      on_playing_artist: "get nome artista",
      actual_volume: "10%",
      actual_music_lenght: 10
    };
  },
  methods: {}
};
</script>

<style scoped>
#testee {
  width: 100%;
}
#teste {
  width: 50%;
}
.footer-container {
  color: aliceblue;
  background: black;
  display: flex;
  height: 100px;
}
</style>
