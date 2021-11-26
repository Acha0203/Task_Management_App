<template>
  <div class="container">
    <section-name v-model="sectionName" />
    <draggable group="myGroup" :options="options" @end="onEnd">
      <task-card
        v-for="task in taskArray"
        :key="task.id"
        :sectionName="sectionName"
        :task="task"
        :taskList="section.taskList"
        @update-task-array="updateTaskArray"
        @inputTitle="inputTitle"
        @inputMemo="inputMemo"
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
import { Section } from "../model";
import draggable from "vuedraggable";

export default {
  props: {
    section: Section,
    sectionList: Section,
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
    inputTitle(...args) {
      let iterator = this.section.taskList.head;
      while (iterator.id !== args[1]) {
        iterator = iterator.next;
      }
      iterator.title = args[0];
    },
    inputMemo(...args) {
      let iterator = this.section.taskList.head;
      while (iterator.id !== args[1]) {
        iterator = iterator.next;
      }
      iterator.memo = args[0];
    },
    deleteSection() {
      this.$emit("delete-section", this.section.id);
    },
    onEnd(event) {
      console.log(event);
      console.log(this.taskArray);
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
