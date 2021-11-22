<template>
  <div class="btn-container">
    <v-btn
      @click="$emit('create-new-section')"
      color="gray darken-4"
      elevation="5"
      rounded
      Large
      dark
      ><v-icon>mdi-plus</v-icon>Add Section</v-btn
    >
  </div>
</template>

<script></script>

<style scoped>
.btn-container {
  padding: 1rem;
}
</style>
