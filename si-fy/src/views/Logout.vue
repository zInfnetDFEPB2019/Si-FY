<template>
  <div id="container">
    {{msg}}
  </div>
</template>

<script>
export default {
  mounted() {
    localStorage.refresh_token = '';
    this.$router.push('/login');
  },

  name: "Logout",
  data() {
    return {
      msg: 'Saindo'
    }
  }
};
</script>

<style scoped>
</style>