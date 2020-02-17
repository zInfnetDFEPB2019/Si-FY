<template>
  <div class="lateral-container">
    <b-card
      no-body
      style="max-width: 20rem;background:black"
      img-src="https://placekitten.com/380/200"
      img-alt="Image"
      img-top
    >
      <template v-slot:header>
        <h4 class="mb-0" id="user-name">Hello World</h4>
      </template>

      <b-list-group flush>
        <b-list-group-item id="lateral-btn">Cras justo odio</b-list-group-item>
        <b-list-group-item id="lateral-btn">Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item id="lateral-btn">Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.lateral-container {
  color: aliceblue;
}
#lateral-btn {
  color: aliceblue;
  border-top: solid aliceblue 1px;
  background: black;
  cursor: pointer;
}
#lateral-btn :hover {
  color: rgb(107, 212, 1);
}

#user-name {
  padding-bottom: 50px;
  margin-top: 25px;
}
</style>
