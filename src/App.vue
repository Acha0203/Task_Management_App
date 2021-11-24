<template>
  <v-app id="app">
    <div class="bg-image">
      <task-section
        v-for="section in sectionArray"
        :key="section.id"
        :section="section"
      />
      <add-section-btn @create-new-section="createNewSection" />
    </div>
  </v-app>
</template>

<script>
import AddSectionBtn from "./components/UI/AddSectionBtn.vue";
import TaskSection from "./components/TaskSection.vue";
import { SectionList } from "./model/index.js";

export default {
  name: "App",
  components: { AddSectionBtn, TaskSection },
  data() {
    return {
      sectionListHead: SectionList.head,
      sectionArray: [],
    };
  },
  methods: {
    createNewSection() {
      SectionList.createSection();
      this.sectionArray = SectionList.createSectionArray();
    },
  },
};
</script>

<style scoped>
.bg-image {
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.7rem;
  background-color: #000000;
  background-image: url("./assets/images/orbs-ge1b8bbe9b_1920.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
