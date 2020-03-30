<template>
  <div id="container">
    <v-btn text small red v-on:click='login'>logar</v-btn>
  </div>
</template>

<script>

export default {
  name: "Login",
  methods: {
      login: function() {
        const scopes = 'streaming user-modify-playback-state user-read-private user-read-email';
        const client_id = 'd935470596ca42b780f901044ec5d075';
        const redirect_uri = 'http://localhost:8080/callback';
        
        window.location.href = 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri);
      },
  }
};
</script>

<style scoped>
</style>
