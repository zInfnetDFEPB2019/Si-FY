<template>
  <div class="on-playing-music-info">
    <b-card
      no-body
      class="overflow-visible"
      style="height:100px;width:300px;minWidth:300px;maxHeight:100px"
    >
      <b-row no-gutters id="la">
        <b-col md="4">
          <b-card-img id="img" :src="actual_album_image"></b-card-img>
        </b-col>
        <b-col md="7">
          <b-card-body :title="on_playing_music">
            <b-card-text>{{on_playing_artist}}</b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="1">
          <b-icon
            onclick="location.href='#'"
            id="plus"
            class="plus-icon"
            icon="plus"
            scale="2px"
            style="border:solid white 1px;borderRadius:20px;"
          />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    actual_album_image: String,
    on_playing_music: String,
    on_playing_artist: String
  },
  data() {
    return {
      css_vinyl: `background: url(${this.actual_album_image}) no-repeat center`
    };
  },
  methods: {}
};
</script>

<style scoped>
#la {
  background: black;
}

#img {
  border-radius: 50%;
  animation: image-rotate 3s linear infinite;
}
@keyframes image-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#plus {
  cursor: pointer;
  margin-top: 100%;
}

svg :hover {
  color: rgb(107, 212, 1);
}
.card-title,
.card-text {
  font-size: 15px;
  margin-left: 10px;
}

.card-title {
  font-weight: bolder;
}

.on-playing-music-info {
  display: flex;
  align-items: center;
}
</style>
