<template>
  <div id="app" class="main">
    <to-do-list-container></to-do-list-container>
  </div>
</template>

<script>
import ToDoListContainer from './blocks/toDoListContainer'

export default {
  name: "App",
  components: {
    ToDoListContainer,
  },
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hidden {
  display: none;
}
</style>
