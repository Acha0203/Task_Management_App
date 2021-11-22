<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    color="gray darken-4"
    label="Section Name"
  />
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>
