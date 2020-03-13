<template>
  <v-container>
    <v-card id="card-item" color="#4E4E4E" outlined title>
      <v-img height="90%" width="100%" :src="image"></v-img>
      <v-card-subtitle id="card-title"  v-text="title" class="grey--text text--lighten-2"/>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["title", "image"]
};
</script>

<style scoped>

#card-item {
  height: 140px;
  width: 140px;
}

#card-title {
  /* font-family: arial, sans-serif; */
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  font-weight: bold;
  padding-top: 5px;
  text-align: center;
}
</style>
