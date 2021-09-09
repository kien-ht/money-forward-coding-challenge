<template>
  <div id="app">
    <Loading ref="loadingRef" />
    <NotificationModal ref="notificationModalRef" />
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import Loading from "@/components/Loading.vue";
import NotificationModal from "@/components/NotificationModal.vue";

import { baseAxios } from "@/services/base-service";

export default Vue.extend({
  name: "App",

  components: {
    Loading,
    NotificationModal,
  },

  async created() {
    this.setupAxiosInterceptors();
    this.buildCommonComponentToRoot();
  },

  methods: {
    // region [PRIVATE]
    setupAxiosInterceptors() {
      baseAxios.interceptors.request.use(
        (config) => {
          this.$refs.loadingRef.progressOn();
          return config;
        },
        (err) => {
          this.$refs.loadingRef.progressOff();
          return Promise.reject(err);
        }
      );
      baseAxios.interceptors.response.use((config) => {
        this.$refs.loadingRef.progressOff();
        return config;
      });
    },

    buildCommonComponentToRoot() {
      Object.defineProperty(this.$root, "notify", {
        get: () => this.$refs.notificationModalRef,
      });
      Object.defineProperty(Vue.prototype, "$loading", {
        get: () => this.$refs.loadingRef,
      });
    },

    // end region
  },
});
</script>
