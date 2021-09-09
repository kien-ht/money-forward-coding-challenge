<template>
  <div>
    <h1>404</h1>
    <b-button variant="dark" @click="onClickBackToHome">Back To Home</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "404Page",

  methods: {
    // region [EVENT]
    onClickBackToHome() {
      this.$router.push("/");
    },
    // end region
  },
});
</script>
