<template>
  <div class="to-do-list-header">
    <h2>To Do List</h2>
    <input-text
      v-model="searchData"
      :placeholder="'Search For Items'"
      :inputTimeout="500"
      @input="$emit('search', $event)"
      class="to-do-list-header__input"
    ></input-text>
  </div>
</template>
<script>
import InputText from "../components/inputText";
export default {
  data() {
    return {
      searchData: "",
    };
  },
  components: {
    InputText,
  },
};
</script>
<style>
.to-do-list-header {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.to-do-list-header__input {
  align-self: stretch;
  min-width: 280px;
  min-height: 34px;

  outline: none;
  outline-width: 0px;

  border-color: black;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;

  padding-left: 4px;
  margin-left: 50px;
  margin-right: 50px;
}

</style>