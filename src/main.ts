import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import services from "./services";

import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/design/index.scss";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$api", {
  get() {
    return services;
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
