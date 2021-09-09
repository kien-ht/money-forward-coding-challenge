<template>
  <div class="layout-wrapper">
    <div class="page-topbar bg-white">
      <router-link to="/">
        <span>
          <img src="@/assets/money-forward-logo.png" alt height="50" />
        </span>
      </router-link>
    </div>

    <b-container fluid class="h-100">
      <b-row class="h-100">
        <b-col class="bg-warning py-5 px-4 d-none d-md-block" cols="3">
          <b-nav vertical pills>
            <b-button
              class="w-100"
              variant="dark"
              @click="onClickAccountSearchButton"
              >Account Search</b-button
            >
          </b-nav>
        </b-col>

        <b-col class="p-5" col>
          <!-- Page Content-->
          <slot />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainLayout",

  methods: {
    // region [EVENT]
    onClickAccountSearchButton() {
      this.$router.push({ name: "UserSearchPage" });
    },
    // end region
  },
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .page-topbar {
    text-align: left;
    padding: 1rem;
    width: 100%;
  }
}
</style>
