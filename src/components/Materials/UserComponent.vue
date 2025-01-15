<template>
  <div
    id="user-component"
    class="my-4 py-3"
    style="background: rgb(238, 238, 238)"
  >
    <h2>User Component</h2>
    <p class="text-capitalize">name: {{ name }}</p>
    <p class="text-capitalize">age: {{ age }}</p>
    <img v-if="image" :src="image" class="image-fluid" :alt="name" />
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    age: String,
    image: String,
  },
};
</script>
