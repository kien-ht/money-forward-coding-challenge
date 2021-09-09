<template>
  <transition name="modal">
    <b-modal v-model="show" :title="content.title" centered>
      <p class="mb-2">
        {{ content.body }}
      </p>
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="close">Close</b-button>
      </template>
    </b-modal>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NotificationModal",

  data() {
    return {
      show: false,
      content: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    open(options: { title: string; body: string }) {
      if (options) this.content = options;
      this.show = true;
    },
    close() {
      this.show = false;
    },
  },
});
</script>

<style lang="scss" scoped></style>
