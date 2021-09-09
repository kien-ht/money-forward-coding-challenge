import Vue from "vue";
import Vuex from "vuex";
import $api from "@/services";

Vue.use(Vuex);

interface Account {
  id: string;
  user_id: string;
  name: string;
  balance: string;
}

export default new Vuex.Store({
  state: {
    currentSearchUserAccountList: [],
  },
  getters: {
    currentSearchUserAccountList: (state) => {
      return state.currentSearchUserAccountList.map(
        (account: { attributes: Account }) => {
          return account.attributes;
        }
      );
    },
  },
  mutations: {
    SET_CURRENT_SEARCH_USER_ACCOUNT_LIST(state, payload) {
      state.currentSearchUserAccountList = payload;
    },
  },
  actions: {
    async setCurrentSearchUserAccountList({ commit }, id) {
      const response = (await $api.userService.getUserAccountList(id)) || [];
      commit("SET_CURRENT_SEARCH_USER_ACCOUNT_LIST", response);
    },
  },
  modules: {},
});
