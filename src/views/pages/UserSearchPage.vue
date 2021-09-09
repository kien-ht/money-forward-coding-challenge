<template>
  <MainLayout>
    <b-input-group size="md" class="account-input-group mb-3">
      <b-form-input
        v-model="textSearch"
        v-focus
        :state="rule"
        placeholder="Type user_id to search"
        aria-describedby="input-live-help input-live-feedback"
        @keyup.enter="onClickSearchButton"
      ></b-form-input>
      <b-input-group-append>
        <b-button
          size="md"
          text="Button"
          variant="dark"
          :disabled="!rule"
          @click="onClickSearchButton"
          >Search</b-button
        >
      </b-input-group-append>
      <b-form-invalid-feedback id="input-live-feedback">
        You can't search with an empty text!
      </b-form-invalid-feedback>
    </b-input-group>
  </MainLayout>
</template>

<script land="ts">
import Vue from "vue";
import MainLayout from "@/views/layouts/MainLayout.vue";

export default Vue.extend({
  name: "UserSearchPage",

  components: {
    MainLayout,
  },

  directives: {
    focus: {
      inserted(el, binding, vnode) {
        el.focus();
      },
    },
  },

  data() {
    return {
      textSearch: "",
      isTouched: false,
    };
  },

  computed: {
    rule() {
      if (!this.isTouched) return null;
      return Boolean(this.textSearch);
    },
  },

  created() {
    this.setupSearchInputWatcher();
  },

  methods: {
    // region [EVENT]
    async onClickSearchButton() {
      await this.$store.dispatch(
        "setCurrentSearchUserAccountList",
        this.textSearch
      );

      if (!this.$store.getters.currentSearchUserAccountList.length) {
        return this.$root.notify.open({
          title: "Notice",
          body: "No user is found!",
        });
      }
      this.$router.push(`/users/${this.textSearch}`);
    },
    // end region

    // region [PRIVATE]
    setupSearchInputWatcher() {
      const unwatch = this.$watch("textSearch", () => {
        this.isTouched = true;
        unwatch();
      });
    },
    // end region
  },
});
</script>

<style lang="scss" scoped>
.account-input-group {
  text-align: left;
}
</style>
