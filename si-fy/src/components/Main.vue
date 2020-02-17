<template>
  <div class="main-container">
    <div id="lateral-container">
      <MainLateral />
    </div>
    <div id="central-container">
      <MainCentral />
    </div>
  </div>
</template>

<script>
import MainCentral from "./MainCentral.vue";
import MainLateral from "./MainLateral.vue";
export default {
  components: {
    MainCentral,
    MainLateral
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
}

#lateral-container {
  height: 100%;
  width: 30%;
}
#central-container {
  width: 70%;
  height: 100%;
}
</style>
