<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    color="grey darken-3"
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
