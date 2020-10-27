<template>
  <div class="listContainer">
    <list-block-header
      :name="listName"
      :sortOptions="sortOptions"
      :selectedSorting="selectedSorting"
      :showClearButton="showClearButton"
      @clear-list="$emit('clear-list')"
      @select-sort="$emit('select-sort', $event)"
    ></list-block-header>

    <to-do-item v-for="item in items" :item="item" :key="item.name + item.createdTS" @modify-item="$emit('modify-item', $event)"></to-do-item>
  </div>
</template>

<script>
import ListBlockHeader from "./listBlockHeader";
import ToDoItem from "../components/toDoItem";
import { SortOption } from "../store/sorting";
import { ListItem } from "../store/listItem";


export default {
  props: {
    listName: {
      type: String,
      required: true,
    },
    selectedSorting: {
      type: SortOption,
      required: true,
    },
    sortOptions: {
      type: Array,
      required: true,
      validator: (prop) =>
        prop.length > 0 && prop.every((e) => e instanceof SortOption),
    },
    items: {
      type: Array,
      required: true,
      validator: (prop) => prop.every((e) => e instanceof ListItem),
    },
  },
  components: {
    ListBlockHeader,
    ToDoItem,
  },
  computed: {
    showClearButton() {
      return this.items.length > 1
    }
  },
};
</script>

<style>
.listContainer {
  display: flex;
  flex-direction: column;
}

.listContainer ul {
  list-style-type: none;
  padding: 8px;
}

.newElem {
  align-self: center;
}

.removeMargins {
  margin-left: 50px;
  margin-right: 50px;
}

</style>