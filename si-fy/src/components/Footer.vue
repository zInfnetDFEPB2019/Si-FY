<template>
  <div class="footer">
    <v-footer app dark max-height="80px" color="#404040" padless>
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
            <v-list-item class="author" v-if="this.track != ''">
              <v-list-item-avatar tile size="60" color="#404040" class="photo-author">
                <v-img 
                    v-bind:src= this.track.album.images[0].url />
              </v-list-item-avatar>
              <v-list-item-content class="author">
                <v-list-item-subtitle class="text-justify">
                  <p class="text-justify grey--text text--lighten-3">
                    <strong>{{ this.track.name }}
                    </strong>
                  </p>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="grey--text text--lighten-3"
                  >{{ this.track.artists[0].name }}
                  </v-list-item-subtitle>
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
              <v-list-item class="player">
                <v-list-item-content v-on:click="repeateTrack" class="icons">
                  <v-icon class="grey--text text--lighten-3">skip_previous</v-icon>
                </v-list-item-content>
                
                <v-list-item-content v-on:click="playPauseSong" class="icons">
                  <v-icon class="grey--text text--lighten-3">{{ this.play }}</v-icon>
                </v-list-item-content>
                
                <v-list-item-content v-on:click="repeateTrack" class="icons">
                  <v-icon class="grey--text text--lighten-3">skip_next</v-icon>
                </v-list-item-content>
              </v-list-item>
            </v-row>
            <v-row>
              <v-list-item>
                <v-list-item-content>
                  <v-slider track-color="grey" always-dirty min="0" :max= this.trackDuration :value= this.trackPosition>
                    <template v-slot:prepend>
                      <p class="grey--text text--lighten-3">{{ trackPositionView }}</p>
                    </template>
                    <template v-slot:append>
                      <p class="grey--text text--lighten-3">{{ trackDurationView }}</p>
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
            max-width="180"
            outlined
          >
            <v-list-item>
              <v-list-item-content>
                <v-slider track-color="grey" always-dirty min="0" max="100" v-model="trackVolume" class="volume">
                  <template v-slot:prepend>
                    <v-icon class="grey--text text--lighten-3">volume_up</v-icon>
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
import {mapGetters} from 'vuex';
import Api from '../service/api';
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      add_icon: "add",
      trackPosition: 0,
      trackDuration: 1,
      trackPositionView: "00:00",
      trackDurationView: "00:00",
      trackVolume: "100"
    };
  },
  mounted() {
    if (this.player == '') this.getToken();
  },
  updated() {
    this.statusTrack();
    this.setVolume();
  },
  computed: {
    ...mapGetters([
        'player',
        'play',
        'track'
    ]),
  },
  methods: {
    ...mapActions([
      'addPlayer',
      'setPlay'
    ]), 
    
    add_song_to_favorite() {
      if (this.add_icon == "add") this.add_icon = "check";
      else this.add_icon = "add";
    },
    
    playPauseSong() { 
      if (this.play == "play_arrow") {
        this.player.resume().then(() => {
          this.setPlay("stop");
        });
      }
      else {
        this.player.pause().then(() => {
          this.setPlay("play_arrow");
        })
      }
    },

    repeateTrack() {
      this.player.seek(0).then(() => {
        this.player.resume().then(() => {
          this.setPlay("stop");
        });
      });
    },
    
    getToken() {
      const api = new Api();
      api.getToken(localStorage.refresh_token)
        .then(token => {
          this.initPlayer(token.data.access_token);
        }).catch(() => {
          this.getToken();
      });
    },

    initPlayer(token) {
      const player = ( new window.Spotify.Player({
        name: 'Sify',
        getOAuthToken: cb => { cb(token); }
      }));
      
      player.addListener('initialization_error', ({ message }) => {this.errorMessage = message});
      player.addListener('authentication_error', ({ message }) => {this.errorMessage = message});
      player.addListener('account_error', ({ message }) => {this.errorMessage = message});
      player.addListener('playback_error', ({ message }) => {this.errorMessage = message});
      player.addListener('player_state_changed', state => {this.playerState = state});
      player.addListener('ready', ({ device_id }) => {device_id.trim()});
      player.addListener('not_ready', ({ device_id }) => {device_id.trim();});
      player.connect();
      this.addPlayer(player);
    },

    statusTrack() {
      this.player.getCurrentState().then(state => {
        this.trackPositionView = this.millisToMinutesAndSeconds(state.position);
        this.trackDurationView = this.millisToMinutesAndSeconds(state.duration);
        
        this.trackPosition = state.position;
        this.trackDuration = state.duration;
      });
    },

    millisToMinutesAndSeconds(millis) {
      let min = Math.floor((millis/1000/60) << 0);
      let sec = Math.floor((millis/1000) % 60);
      return this.valueTwoHouses(min) + ':' + this.valueTwoHouses(sec);
    },

    valueTwoHouses(value) {
      return value < 10 ? `0${value}` : value;
    },

    setVolume() {
      this.player.setVolume(this.trackVolume / 100).then(() => {
      });
    }
  }
};
</script>

<style scoped>
.player{
  min-height:0px; 
  margin-top: 5px
}
.author{
  min-height:0px;     
  padding-top: 0;
  padding-bottom: 0;
}
.photo-author{
  margin: 0;
}
.icons{
  padding:0;
}
.volume{
  margin-right: 20px;
}
</style>