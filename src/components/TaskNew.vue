<template>
  <div class="task-container">
    <v-text-field
      @input="$emit('inputNewTitle', $event)"
      :value="newTask.title"
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
        v-if="textAreaDisplayedFlag"
        @input="$emit('inputNewMemo', $event)"
        :value="newTask.memo"
        color="grey darken-3"
        name="task-memo"
        label="Memo"
        class="text-area"
      />
      <div v-else class="text-box">
        <h3 class="small-font">Memo:</h3>
        <h2 class="middle-font">{{ newTask.memo }}</h2>
      </div>
    </keep-alive>
    <div class="icons-container">
      <div class="btn-container">
        <button @click="switchTextArea">
          <v-icon>mdi-note</v-icon>
        </button>
      </div>
      <check-btn />
      <star-btn />
      <div class="btn-container">
        <v-icon color="grey lighten-1">mdi-delete</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from "./UI/CheckBtn.vue";
import StarBtn from "./UI/StarBtn.vue";
import { Task } from "../model";

export default {
  data() {
    return {
      textAreaDisplayedFlag: false,
    };
  },
  components: { CheckBtn, StarBtn },
  props: {
    sectionName: String,
    newTask: Task,
  },
  methods: {
    switchTextArea() {
      this.textAreaDisplayedFlag = !this.textAreaDisplayedFlag;
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
