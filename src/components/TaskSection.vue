<template>
  <div class="container">
    <section-name v-model="sectionName" />
    <draggable v-model="taskArray" draggable=".task-card" group="tasks">
      <task-card
        v-for="task in taskArray"
        :key="task.id"
        :sectionName="sectionName"
        :task="task"
        :taskArray="taskArray"
        @delete-task="deleteTask"
        @inputTitle="inputTitle"
        @inputMemo="inputMemo"
        class="task-card"
      />
    </draggable>
    <div class="btn-container">
      <button @click="createNewTask">
        <v-icon color="grey darken-2" large>mdi-plus</v-icon>
      </button>
      <button @click="deleteSection">
        <v-icon color="grey darken-2" large>mdi-delete</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import SectionName from "./UI/SectionName.vue";
import TaskCard from "./TaskCard.vue";
import { Section, TaskArray } from "../model";
import draggable from "vuedraggable";

export default {
  props: {
    section: Section,
  },
  components: { SectionName, TaskCard, draggable },
  data() {
    return {
      options: {
        group: "myGroup",
        animation: 200, // Vue.Draggableのアニメーションの設定
      },
      sectionName: "",
      taskArray: this.initializeTaskArray(),
    };
  },
  methods: {
    initializeTaskArray() {
      return TaskArray.createNewTaskArray(this.section.id);
    },
    createNewTask() {
      this.taskArray = TaskArray.createNewTask(this.taskArray, this.section.id);
    },
    deleteTask(id) {
      this.taskArray = TaskArray.deleteTask(this.taskArray, id);
    },
    inputTitle(...args) {
      this.taskArray = TaskArray.inputTitle(this.taskArray, args[1], args[0]);
    },
    inputMemo(...args) {
      this.taskArray = TaskArray.inputMemo(this.taskArray, args[1], args[0]);
    },
    deleteSection() {
      this.$emit("delete-section", this.section.id);
    },
  },
};
</script>

<style scoped>
.container {
  width: 270px;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  box-shadow: 4px 4px 13px 5px rgba(0, 0, 0, 0.25);
}

.btn-container {
  display: flex;
  justify-content: space-between;
  padding-top: 0.7rem;
}
</style>
