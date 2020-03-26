<template>
  <v-container fluid>
    <v-card id="card-item" color="#4E4E4E" outlined tile>
      <v-img height="90%" width="100%" :src="image"></v-img>
      <v-card-subtitle id="card-title" class="headline grey--text text--lighten-2" v-text="title" />
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
  height: 210px;
  width: 200px;
}

#card-title {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
</style>
