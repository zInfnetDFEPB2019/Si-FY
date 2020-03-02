<template>
  <div class="footer">
    <v-footer app dark max-height="100px" color="#404040" padless>
      <v-row no-gutters>
        <v-col cols="4" align="start">
          <v-card
            class="mx-3 my-2"
            color="#404040"
            min-width="220px"
            max-width="230"
            max-height="80px"
            outlined
          >
            <v-list-item>
              <v-list-item-avatar tile size="60" color="#404040">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle class="text-justify">
                  <p class="text-justify grey--text text--lighten-3">
                    <strong>Nome mus ica</strong>
                  </p>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="grey--text text--lighten-3"
                  >Nome Artista</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-icon
                color="grey lighten-2"
                v-on:click="add_song_to_favorite"
                >{{ add_icon }}</v-icon
              >
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="4" align="center">
          <v-card
            color="#404040"
            class="mx-3 my-2"
            max-width="310"
            min-width="300px"
            max-height="80px"
            outlined
          >
            <v-row>
              <v-list-item max-height="10px">
                <v-list-item-content v-for="icon in player_icons" :key="icon">
                  <v-icon
                    v-on:click="play_pause_song"
                    class="grey--text text--lighten-3"
                    >{{ icon }}</v-icon
                  >
                </v-list-item-content>
              </v-list-item>
            </v-row>
            <v-row>
              <v-list-item>
                <v-list-item-content>
                  <v-slider track-color="grey" always-dirty min="0" max="100">
                    <template v-slot:prepend>
                      <p class="grey--text text--lighten-3">00:00</p>
                    </template>
                    <template v-slot:append>
                      <p class="grey--text text--lighten-3">00:00</p>
                    </template>
                  </v-slider>
                </v-list-item-content>
              </v-list-item>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="4" align="center">
          <v-card
            color="#404040"
            class="mx-3 my-2"
            min-width="150px"
            max-height="80px"
            max-width="160"
            outlined
          >
            <v-list-item>
              <v-list-item-content>
                <v-slider track-color="grey" always-dirty min="0" max="100">
                  <template v-slot:prepend>
                    <v-icon
                      v-for="icon in mixer_icons"
                      :key="icon"
                      class="grey--text text--lighten-3"
                      >{{ icon }}</v-icon
                    >
                  </template>
                </v-slider>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add_icon: "add",
      player_icons: [
        "shuffle",
        "skip_previous",
        "play_arrow",
        "skip_next",
        "repeat"
      ],
      mixer_icons: ["playlist_play", "volume_up"]
    };
  },
  methods: {
    add_song_to_favorite: function() {
      if (this.add_icon == "add") this.add_icon = "check";
      else this.add_icon = "add";
    },
    play_pause_song: function() {
      if (this.song_status == "play_arrow") this.song_status = "stop";
      else this.song_status = "play_arrow";
    },
    is_active: function(item_id) {
      if (item_id);
    }
  }
};
</script>

<style scoped></style>
