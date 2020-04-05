<template>
  <div id="container">{{ msg }}</div>
</template>

<script>
import { mapActions } from "vuex";
import Api from "../service/api";

const api = new Api();

export default {
  methods: {
    ...mapActions(["setUserId"])
  },
  mounted() {
    const path = window.location.search;
    if (path.includes("code=")) {
      const code = path.split("code=")[1];

      api
        .login(code)
        .then(response => {
          localStorage.refresh_token = response.data.refresh_token;
          (async () => {
            await this.setUserId();
          })();
          this.$router.push("/");
        })
        .catch(() => {
          this.msg = "Erro ao fazer requisição";
          this.$router.push("/login");
        });
    }
  },

  name: "Callback",
  data() {
    return {
      msg: "Redirecionando"
    };
  }
};
</script>

<style scoped></style>
