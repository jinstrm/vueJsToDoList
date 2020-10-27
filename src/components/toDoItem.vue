<template>
  <div class="to-do-item" @mouseover="showButton" @mouseout="hideButton">
    <checkbox-comp :value="item.done" @input="checkItem" class="to-do-item_checkbox"></checkbox-comp>

    <to-do-item-content :item="item" @modify-item="$emit('modify-item', $event)" class="to-do-item__content"></to-do-item-content>

      <button-comp
        v-show="showRemoveButton"
        class="to-do-item_removeElement"
        :name="''"
        @click="removeItem"
      ></button-comp>
    </div>
</template>

<script>
import { ListItem } from "../store/listItem";
import ToDoItemContent from "./toDoItemContent";
import ButtonComp from "./buttonComp";
import CheckboxComp from "./checkboxComp";

export default {
  data() {
    return {
      showRemoveButton: false,
    };
  },
  props: {
    item: {
      type: ListItem,
      required: true,
    },
  },
  components: {
    ToDoItemContent,
    ButtonComp,
    CheckboxComp,
  },
  methods: {
    showButton() {
      this.showRemoveButton = true;
    },

    hideButton() {
      this.showRemoveButton = false;
    },
    checkItem() {
      const modifyEvent = {
        item: this.item,
        doneChanged: true,
      };

      this.$emit("modify-item", modifyEvent);
    },
    removeItem() {
      const modifyEvent = {
        item: this.item,
        remove: true,
      };

      this.$emit("modify-item", modifyEvent);
    },
  },
};
</script>

<style>
.to-do-item {
  display: flex;
  justify-content: stretch;
  align-items: center;
  position: relative;
  min-height: 40px;
  min-width: 400px;
  width: 100%;
  padding: 5px 0 5px 0;
}

.to-do-item_checkbox {
  flex-grow: 0;
  flex-shrink: 0;
  width: 48px;
}

.to-do-item__content {
  flex-grow: 1;
  margin-right: 50px;
}

.to-do-item_removeElement {
  background-image: url("../assets/delete-sign.png");
  background-color: white;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-style: none;
  height: 30px;
  width: 30px;
  position: absolute;
  top: calc(50% - 15px);
  right: 10px;
  cursor: pointer;
}

.to-do-item_elementControls {
  flex: 2;
  display: flex;
  justify-content: flex-start;
  margin-right: 50px;
  align-self: stretch;
}

.to-do-item_elementControls_timeInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  padding-left: 10px;
  padding-right: 5px;

  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-radius: 0px 5px 5px 0px;
  border-left: none;
}

.to-do-item_elementControls_timeInfo_text {
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
}
</style>