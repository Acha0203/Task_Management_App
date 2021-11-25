<template>
  <div class="container">
    <section-name v-model="sectionName" />
    <task-card
      v-for="task in taskArray"
      :key="task.id"
      :sectionName="sectionName"
      :task="task"
      :taskList="section.taskList"
      @updateTaskArray="updateTaskArray"
      @inputTitle="handleInputTitle"
      @inputMemo="handleInputMemo"
    />
    <div class="btn-container">
      <button @click="createNewTask">
        <v-icon color="grey darken-3" large>mdi-plus</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import SectionName from "./UI/SectionName.vue";
import TaskCard from "./TaskCard.vue";
import { Section } from "../model";

export default {
  props: {
    section: Section,
  },
  components: { SectionName, TaskCard },
  data() {
    return {
      sectionName: "",
      taskArray: this.initializeTaskArray(),
    };
  },
  methods: {
    createNewTask() {
      this.section.taskList.createNewTask(this.section.id);
      this.updateTaskArray();
    },
    initializeTaskArray() {
      this.section.taskList.createNewTask(this.section.id);
      return this.section.taskList.createTaskArray();
    },
    updateTaskArray() {
      this.taskArray = this.section.taskList.createTaskArray();
    },
    handleInputTitle(...args) {
      let iterator = this.section.taskList.head;
      while (iterator.id !== args[1]) {
        iterator = iterator.next;
      }
      iterator.title = args[0];
    },
    handleInputMemo(...args) {
      let iterator = this.section.taskList.head;
      while (iterator.id !== args[1]) {
        iterator = iterator.next;
      }
      iterator.memo = args[0];
    },
  },
};
</script>

<style scoped>
.container {
  width: 90vw;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  box-shadow: 4px 4px 13px 5px rgba(0, 0, 0, 0.25);
}

.btn-container {
  display: flex;
  align-items: flex-start;
  padding-top: 0.7rem;
  filter: drop-shadow(4px 4px 4px #291515);
}
</style>
