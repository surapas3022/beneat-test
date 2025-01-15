<template>
  <div id="exersice-3" class="max-width-screen">
    <h2>Photo (components, props)</h2>
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
      <UserComponent :name="form.name" :age="form.age" :image="form.image" />
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
    };
  },
};
</script>
