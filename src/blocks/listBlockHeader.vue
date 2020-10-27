<template>
  <div class="list-block-header">
    <h2 class="list-block-header__name">{{ name }}</h2>
    <div>
      <button-comp
        v-if="showClearButton"
        :name="'Clear'"
        @click="$emit('clear-list')"
        class="list-block-header__clear-button"
      ></button-comp>
      <select-code-and-name
        :selected="selectedSorting"
        :options="sortOptions"
        @select="$emit('select-sort', $event)"
        class="list-block-header__sorting-dropdown"
      ></select-code-and-name>
    </div>
  </div>
</template>

<script>
import { SortOption } from "../store/sorting";
import SelectCodeAndName from "../components/selectCodeAndName";
import ButtonComp from "../components/buttonComp";

export default {
  props: {
    name: {
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
    showClearButton: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      selected: null,
    };
  },
  components: {
    SelectCodeAndName,
    ButtonComp
  },
};
</script>

<style>
.list-block-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.list-block-header__name {
  margin-left: 50px;
}

.list-block-header__sorting-dropdown {
  margin-right: 50px;
}

.list-block-header__clear-button {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 4px;
  padding: 7px;
  border-radius: 3px;
  background-color: rgb(44, 62, 80);
  border: none;
  color: #fff;
  width: 150px;
  height: 30px;
  margin: 10px;
  text-align: center;
}
</style>