<template>
  <div class="toDoListBody">
    <to-do-item-creation @create-item="addItem"></to-do-item-creation>

    <list-block
      :listName="'Open'"
      :sortOptions="openSortOptions"
      :selectedSorting="selectedOpenSorting"
      :items="filteredOpen"
      @select-sort="changeOpenSort"
      @clear-list="clearOpenList"
      @modify-item="modifyItem"
    ></list-block>

    <list-block
      :listName="'Done'"
      :sortOptions="doneSortOptions"
      :selectedSorting="selectedDoneSorting"
      :items="filteredDone"
      @select-sort="changeDoneSort"
      @clear-list="clearDoneList"
      @modify-item="modifyItem"
    ></list-block>
  </div>
</template>

<script>
import ToDoItemCreation from "../components/toDoItemCreation";
import ListBlock from "./listBlock";
import { CHANGE_OPEN_SORT, CHANGE_DONE_SORT } from "../store/mutations";
import {
  CLEAR_OPEN_LIST,
  CLEAR_DONE_LIST,
  CHECK_LIST_ITEM,
  CREATE_LIST_ITEM,
  REMOVE_LIST_ITEM,
  UPDATE_LIST_ITEM_NAME,
} from "../store/actions";
import { TO_DO_ITEMS, DONE_ITEMS } from "../store/getters";
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      newItemModel: "",
    };
  },
  props: {
    searchData: {
      type: Object,
      required: true,
    },
  },
  components: {
    ListBlock,
    ToDoItemCreation,
  },
  methods: {
    ...mapMutations({
      changeOpenSort: CHANGE_OPEN_SORT,
      changeDoneSort: CHANGE_DONE_SORT,
    }),

    ...mapActions({
      clearOpenListAction: CLEAR_OPEN_LIST,
      clearDoneListAction: CLEAR_DONE_LIST,
      addItem: CREATE_LIST_ITEM,
      updateItemName: UPDATE_LIST_ITEM_NAME,
      removeItem: REMOVE_LIST_ITEM,
      checkItem: CHECK_LIST_ITEM,
    }),

    createNewItem() {
      this.addItem(this.newItemModel);
      this.newItemModel = "";
    },

    modifyItem(payload) {
      const item = payload.item;

      if (payload.remove) {
        this.removeItem(payload.item);
        return;
      }

      if (payload.newName) {
        this.updateItemName(payload);
      }
      if (payload.doneChanged) {
        this.checkItem(item);
      }
    },

    clearOpenList() {
      this.clearOpenListAction(this.filteredOpen);
    },

    clearDoneList() {
      this.clearDoneListAction(this.filteredDone);
    },

    showItem(item) {
      if (this.searchData.date && item.modifiedTS > this.searchData.date) {
        return true;
      }
      return item.name
        .toLowerCase()
        .includes(this.searchData.value.toLowerCase());
    },
  },

  computed: {
    ...mapState([
      "list",
      "openSortOptions",
      "doneSortOptions",
      "selectedOpenSorting",
      "selectedDoneSorting",
    ]),
    ...mapGetters({
      openToDos: TO_DO_ITEMS,
      doneToDos: DONE_ITEMS,
    }),
    filteredOpen() {
      return this.openToDos.filter((item) => this.showItem(item));
    },
    filteredDone() {
      return this.doneToDos.filter((item) => this.showItem(item));
    },
  },
};
</script>

<style>
.toDoListBody {
  display: flex;
  flex-direction: column;
}
</style>