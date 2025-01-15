<template>
  <div id="exercise-5" class="max-width-screen">
    <h2>Products (components & array data)</h2>
    <div class="row">
      <div class="col-8">
        <div class="row mt-4">
          <div class="col-3" v-for="(item, index) in listData" :key="index + 1">
            <div class="card shadow-sm mb-4">
              <div class="card-body text-left">
                <div>Item ID: {{ index + 1 }}</div>
                <div class="mt-3">
                  <FormInput
                    v-model="item.name"
                    type="text"
                    title="Item Name"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div class="text-right">
                  <button
                    @click="removeCard(index)"
                    class="btn btn-danger text-capitalize"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="text-capitalize btn btn-primary" @click="addNewCard">
          add item
        </button>
      </div>
      <div class="col-4 text-left">
        <h4>Item List</h4>
        <ItemListComponents :listData="listData" />
      </div>
    </div>
  </div>
</template>
<script>
import FormInput from "@/components/Materials/InputGroup.vue";
import ItemListComponents from "@/components/Materials/ItemListComponents.vue";
export default {
  components: {
    FormInput,
    ItemListComponents,
  },
  data() {
    return {
      listData: [
        {
          name: "",
        },
        {
          name: "",
        },
        {
          name: "",
        },
      ],
    };
  },
  methods: {
    addNewCard() {
      this.listData.push({ name: "" });
    },
    removeCard(index) {
      this.listData.splice(index, 1);
    },
  },
};
</script>
