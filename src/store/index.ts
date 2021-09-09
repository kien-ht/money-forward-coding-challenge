import Vue from "vue";
import Vuex from "vuex";
import $api from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSearchUserAccountList: [],
  },
  getters: {
    currentSearchUserAccountList: (state) => {
      return state.currentSearchUserAccountList.map((account: { attributes: any }) => {
        return account.attributes
      })
    },
  },
  mutations: {
    SET_CURRENT_SEARCH_USER_ACCOUNT_LIST(state, payload) {
      state.currentSearchUserAccountList = payload
    },
  },
  actions: {
    async setCurrentSearchUserAccountList({ commit }, id) {
      const response = await $api.userService.getUserAccountList(id) || []
      commit('SET_CURRENT_SEARCH_USER_ACCOUNT_LIST', response)
    }
  },
  modules: {},
});
