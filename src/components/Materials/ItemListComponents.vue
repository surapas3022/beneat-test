<template>
  <div>
    <div v-for="(item, index) in listData" :key="index">
      <p v-if="item?.name">{{ index + 1 }}.{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      required: true,
    },
    // delete: {
    //   type: Boolean,
    //   default: false,
    // },
  },
};
</script>
