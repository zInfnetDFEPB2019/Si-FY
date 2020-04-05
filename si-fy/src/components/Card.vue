<template>
  <v-container fluid>
    <v-card class="cardItem" color="#4E4E4E" outlined tile>
      <v-img height="90%" width="100%" :src="image"></v-img>
      <v-card-subtitle
        class="headline grey--text text--lighten-2 cardTitle"
        v-text="title"
      />
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["title", "image"]
};
</script>

<style scoped>
.cardItem {
  width: 200px;
}

.cardTitle {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
</style>
