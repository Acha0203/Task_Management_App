<template>
  <div class="btn-container">
    <button @click="handleClick">
      <v-icon color="gray darken-4" large>mdi-plus</v-icon>
    </button>
  </div>
</template>

<script>
import { TaskList } from "../../model";

export default {
  props: {
    sectionId: Number,
    taskList: TaskList,
  },
  methods: {
    handleClick() {
      this.taskList.createNewTask(this.sectionId);
      this.$emit("update-task-array");
    },
  },
};
</script>

<style scoped>
.btn-container {
  display: flex;
  align-items: flex-start;
  padding-top: 0.7rem;
  filter: drop-shadow(4px 4px 4px #291515);
}
</style>
