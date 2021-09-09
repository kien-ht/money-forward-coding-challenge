import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import { createLocalVue } from "@vue/test-utils";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

let localVue = createLocalVue();

localVue.use(BootstrapVue);

export default {
  localVue,
};
