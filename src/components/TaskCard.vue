<template>
  <div class="task-container">
    <v-text-field
      @input="$emit('inputTitle', $event, task.id)"
      :value="task.title"
      color="grey darken-1"
      label="Title"
    />
    <div>
      <h3 class="small-font">Section Name:</h3>
      <h2 class="large-font">{{ sectionName }}</h2>
    </div>
    <keep-alive>
      <v-textarea
        outlined
        v-if="isTextAreaOpened"
        @input="$emit('inputMemo', $event, task.id)"
        :value="task.memo"
        color="grey darken-3"
        name="task-memo"
        label="Memo"
        class="text-area"
      />
      <div v-else class="text-box">
        <h3 class="small-font">Memo:</h3>
        <h2 class="middle-font">{{ task.memo }}</h2>
      </div>
    </keep-alive>
    <div class="icons-container">
      <div class="btn-container">
        <button @click="toggleTextArea">
          <v-icon>mdi-note</v-icon>
        </button>
      </div>
      <div class="btn-container">
        <button @click="toggleCheckMark">
          <v-icon v-if="task.doneFlag" color="blue accent-1"
            >mdi-check-bold</v-icon
          >
          <v-icon v-else color="grey darken-1">mdi-check-bold</v-icon>
        </button>
      </div>
      <div class="btn-container">
        <button @click="toggleStarMark">
          <v-icon v-if="task.starFlag" color="cyan accent-3">mdi-star</v-icon>
          <v-icon v-else color="grey darken-1">mdi-star</v-icon>
        </button>
      </div>
      <div class="btn-container">
        <button @click="deleteTask">
          <v-icon>mdi-delete</v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Task, TaskArray } from "../model";

export default {
  data() {
    return {
      isTextAreaOpened: false,
    };
  },
  props: {
    sectionName: String,
    task: Task,
    taskArray: Array,
  },
  methods: {
    toggleTextArea() {
      this.isTextAreaOpened = !this.isTextAreaOpened;
    },
    toggleCheckMark() {
      this.isBlue = !this.isBlue;
      TaskArray.toggleDoneFlag(this.taskArray, this.task.id);
    },
    toggleStarMark() {
      this.isCyan = !this.isCyan;
      TaskArray.toggleStarFlag(this.taskArray, this.task.id);
    },
    deleteTask() {
      this.$emit("delete-task", this.task.id);
    },
  },
};
</script>

<style scoped>
.btn-container {
  padding-left: 0.5rem;
}

.text-area {
  margin-top: 0.5rem;
}

.text-box {
  width: 200px;
  height: 100px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  overflow-wrap: break-word;
  overflow-y: scroll;
}
</style>
