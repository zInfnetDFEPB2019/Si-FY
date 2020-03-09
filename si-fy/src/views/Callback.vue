<template>
  <div id="container">
  </div>
</template>

<script>

export default {
  created() {
    const path = window.location.search;
    if (path.includes("code="))  {
        const code = path.split('code=')[1];
        console.log(code);
        
        
    this.$router.push('/');
    }
  },

  name: "Login",
  methods: {    
      sucess: function() {
          this.$router.push('/');
      },
      error: function() {}
  }
};
</script>

<style scoped>
</style>