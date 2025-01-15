<template>
  <div id="exercise-1" class="max-width-screen">
    <h2>Animals (v-if / v-else-if / v-else)</h2>
    <div class="d-flex justify-content-between mb-4 px-4">
      <button
        class="btn mx-2 text-capitalize"
        v-for="(item, index) in buttonList"
        :key="index"
        @click="setCard(item)"
        :class="{
          'btn-outline-primary': index === 0,
          'btn-outline-success': index === 1,
          'btn-outline-secondary': index === 2,
          'btn-outline-danger': index === 3,
        }"
      >
        {{ item.name }}
      </button>
    </div>

    <!-- Can use same but is not correct exercise 1 required -->
    <!-- <div class="d-flex flex-column justify-content-center align-items-center">
      <CardWithImage :name="selectPicked.name" :image="selectPicked.image" />
    </div> -->

    <div class="d-flex flex-column justify-content-center align-items-center">
      <CardWithImage
        v-if="selectPicked.name === 'dogs'"
        :name="selectPicked.name"
        :image="selectPicked.image"
      />
      <CardWithImage
        v-else-if="selectPicked.name === 'cats'"
        :name="selectPicked.name"
        :image="selectPicked.image"
      />
      <CardWithImage
        v-else-if="selectPicked.name === 'birds'"
        :name="selectPicked.name"
        :image="selectPicked.image"
      />
      <CardWithImage
        v-else-if="selectPicked.name === 'rabbits'"
        :name="selectPicked.name"
        :image="selectPicked.image"
      />
    </div>
  </div>
</template>

<script>
import CardWithImage from "@/components/Materials/CardWithImage.vue";
import { buttonList } from "../../config/menuList";
export default {
  name: "Exercise1View",
  components: {
    CardWithImage,
  },
  data() {
    return {
      buttonList: buttonList,
      selectPicked: buttonList[0],
    };
  },
  methods: {
    setCard(item) {
      this.selectPicked = {
        name: item.name,
        image: item.image,
      };
    },
  },
};
</script>
