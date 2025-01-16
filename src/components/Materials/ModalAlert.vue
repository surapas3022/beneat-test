<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-card">
      <h2 class="py-2">{{ message }}</h2>
      <button class="py-2 confirm-button btn btn-primary" @click="onConfirm">
        OK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertModal",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: "",
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onConfirm() {
      this.$emit("confirm");
      this.close();
    },
  },
};
</script>
