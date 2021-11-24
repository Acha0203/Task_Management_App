<template>
  <div class="container">
    <section-name v-model="sectionName" />
    <task-card
      v-for="task in taskArray"
      :key="task.id"
      :sectionName="sectionName"
      :task="task"
      @inputTitle="handleInputTitle"
      @inputMemo="handleInputMemo"
    />
    <task-new
      :sectionName="sectionName"
      :newTask="lastTask"
      @inputNewTitle="handleInputNewTitle"
      @inputNewMemo="handleInputNewMemo"
    />
    <div class="btn-container">
      <button @click="handleAddNewTaskBtn">
        <v-icon color="gray darken-4" large>mdi-plus</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import SectionName from "./UI/SectionName.vue";
import TaskCard from "./TaskCard.vue";
import TaskNew from "./TaskNew.vue";
import { Section } from "../model";

export default {
  props: {
    section: Section,
  },
  components: { SectionName, TaskCard, TaskNew },
  data() {
    return {
      sectionName: "",
      taskArray: [],
      lastTask: this.setNewTask(),
    };
  },
  methods: {
    setNewTask() {
      return this.section.taskList.createNewTask(this.section.id);
    },
    handleAddNewTaskBtn() {
      this.taskArray = this.section.taskList.createTaskArray();
      this.lastTask = this.setNewTask();
      console.log(this.section.taskList);
      console.log(this.lastTask);
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
    handleInputNewTitle(event) {
      this.section.taskList.getLastTask().title = event;
    },
    handleInputNewMemo(event) {
      this.section.taskList.getLastTask().memo = event;
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
  align-items: flex-start;
  padding-top: 0.7rem;
  filter: drop-shadow(4px 4px 4px #291515);
}
</style>
