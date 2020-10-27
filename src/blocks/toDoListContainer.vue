<template>
  <div class="toDoListContainer">
    <to-do-list-header @search="updateSerarchData"></to-do-list-header>
    <to-do-list-body :searchData="searchData"></to-do-list-body>
  </div>
</template>

<script>
import ToDoListHeader from "./toDoListHeader";
import ToDoListBody from "./toDoListBody";

export default {
  data() {
    return {
      searchData: {
        value: "",
        date: null,
      },
    };
  },
  methods: {
    updateSerarchData(payload) {
      this.searchData = {
        value: payload,
        date: new Date(),
      };
    },
  },
  components: {
    ToDoListHeader,
    ToDoListBody,
  },
};
</script>

<style>
.toDoListContainer {
  display: flex;
  flex-direction: column;
  min-width: 700px;
  max-width: 700px;
}

@media screen and (max-width: 700px) {
  .toDoListContainer {
    min-width: 400px;
    max-width: 400px;
  }
}

body {
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode",
    "Lucida Sans", Tahoma, sans-serif;
}
</style>