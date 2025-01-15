<template>
  <div id="exersice-3" class="max-width-screen">
    <h2>Photos (components, ref)</h2>
    <div class="d-flex flex-column w-100">
      <FormInput
        v-model="form.name"
        type="text"
        title="name"
        id="name"
        placeholder="name"
      />
      <FormInput
        v-model="form.age"
        type="text"
        title="age"
        id="age"
        placeholder="age"
      />
      <FormInput
        v-model="form.image"
        type="text"
        title="image"
        id="image"
        placeholder="image"
      />
      <div class="d-flex jutify-content-start">
        <button
          class="btn btn-primary"
          @click="updateUserComponent"
          type="button"
        >
          submit
        </button>
      </div>

      <UserComponent
        v-if="show"
        :name="form.name"
        :age="form.age"
        :image="form.image"
      />
    </div>
  </div>
</template>
<script>
import FormInput from "@/components/Materials/InputGroup.vue";
import UserComponent from "@/components/Materials/UserComponent.vue";
export default {
  components: {
    FormInput,
    UserComponent,
  },
  data() {
    return {
      form: {
        name: "",
        age: "",
        image: "",
      },
      show: false,
    };
  },
  methods: {
    // จำไม่ได้แล้วครับ ว่า vue 2 ฯptions API ref ใช้ยังไง เพราะ vue 3 ผมใช้ Composition API เป็นหลักครับ
    updateUserComponent() {
      this.show = true;
    },
  },
};
</script>
