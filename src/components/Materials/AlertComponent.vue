<template>
  <div
    :class="['alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show']"
    role="alert"
  >
    {{ message }}
    <button type="button" class="close" aria-label="Close" @click="hide">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  methods: {
    hide() {
      this.$emit("close");
    },
  },
  mounted() {
    if (this.duration > 0) {
      setTimeout(this.hide, this.duration);
    }
  },
};
</script>
