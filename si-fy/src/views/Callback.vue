<template>
  <div id="container">
    {{msg}}
  </div>
</template>

<script>
import Api from '../service/api'

export default {
  mounted() {
    const path = window.location.search;
    if (path.includes("code="))  {
      const code = path.split('code=')[1];
      const api = new Api();
      
      api.login(code).then(response => {
          localStorage.refresh_token = response.data.refresh_token;
        }).catch(() => {
          this.msg = 'Erro ao fazer requisição';
        });
        
    this.$router.push('/');
    }
  },

  name: "Login",
  data() {
    return {
      msg: 'carregando'
    }
  }
};
</script>

<style scoped>
</style>