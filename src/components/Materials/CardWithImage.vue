<template>
  <div class="card" style="width: 18rem">
    <img :src="image" class="card-img-top" :alt="name" />
    <div class="card-body text-center">
      <h5 class="card-title text-capitalize">{{ name }}</h5>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
