<template>
  <div class="container">
    <section-name v-model="sectionName" />
    <task-card
      v-for="task in taskArray"
      :key="task.id"
      :sectionName="sectionName"
      :task="task"
    />
    <add-new-task-btn
      @update-task-array="updateTaskArray"
      :sectionId="this.sectionId"
      :taskList="this.taskList"
    />
  </div>
</template>

<script>
import SectionName from "./UI/SectionName.vue";
import TaskCard from "./TaskCard.vue";
// import TaskNew from "./TaskNew.vue";
import AddNewTaskBtn from "./UI/AddNewTaskBtn.vue";
import { TaskList } from "../model";

export default {
  props: {
    sectionId: Number,
  },
  components: { SectionName, TaskCard, AddNewTaskBtn },
  data() {
    return {
      sectionName: "",
      taskList: new TaskList(this.sectionId),
      taskArray: [],
    };
  },
  computed: {
    getTaskArray() {
      return this.taskList.createTaskArray();
    },
    getNewTask() {
      return this.taskList.createNewTask(this.sectionId);
    },
  },
  methods: {
    updateTaskArray() {
      this.taskArray = this.taskList.createTaskArray();
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
</style>
