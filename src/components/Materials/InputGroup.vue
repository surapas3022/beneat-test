<template>
  <div class="d-flex flex-column align-items-start">
    <label :for="id">{{ title }}</label>
    <input
      :type="type"
      :id="id"
      class="form-group w-100"
      :value="modelValue"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "input",
  },
  props: {
    modelValue: {
      type: [String, Number, Object],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>
