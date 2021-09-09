<template>
  <MainLayout>
    <h1 class="user-name">{{ currentUserName }}</h1>
    <b-table striped small :fields="fields" :items="items" responsive="sm">
      <template #cell(id)="{ item }">
        {{ item.id }}
      </template>

      <template #cell(name)="{ item }">
        <b class="text-info">{{ item.name }}</b>
      </template>

      <template #cell(balance)="{ item }">
        {{ item.balance | formatCurrency }}
      </template>
    </b-table>
    <div class="footer-area">
      <b-button size="md" variant="dark" @click="onClickBackButton"
        >Back</b-button
      >
    </div>
  </MainLayout>
</template>

<script land="ts">
import Vue from "vue";
import MainLayout from "@/views/layouts/MainLayout.vue";

export default Vue.extend({
  name: "UserAccountListPage",

  components: {
    MainLayout,
  },

  filters: {
    formatCurrency(money) {
      return money.toLocaleString("de-DE");
    },
  },

  data() {
    return {
      fields: [
        { key: "id", label: "Account Id" },
        { key: "name", label: "Name" },
        { key: "balance", label: "Balance" },
      ],
      items: [],
      currentUserName: "",
    };
  },

  computed: {
    currentUserId() {
      return this.$route.params.id;
    },
  },

  created() {
    this.fetchData();
  },

  methods: {
    // region [EVENT]
    onClickBackButton() {
      this.$router.go(-1);
    },
    // end region

    // region [TRANSACTION]
    async fetchUser() {
      const response = await this.$api.userService.getUser(this.currentUserId);

      this.currentUserName = response ? response.attributes.name : "";
    },

    async fetchData() {
      this.fetchUser();

      if (!this.$store.getters.currentSearchUserAccountList.length) {
        await this.$store.dispatch(
          "setCurrentSearchUserAccountList",
          this.currentUserId
        );
      }

      this.items = this.$store.getters.currentSearchUserAccountList;
    },
    // end region
  },
});
</script>

<style lang="scss" scoped>
.user-name {
  text-align: left;
  text-transform: uppercase;
}
.footer-area {
  position: absolute;
  bottom: 0;
}
</style>
