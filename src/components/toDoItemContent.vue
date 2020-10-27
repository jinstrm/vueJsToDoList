<template>
  <div class="to-do-item-content">
    <editable-span :value="item.name" @input="updateItemName" class="to-do-item-content__name"></editable-span>
    <div class="to-do-item-content__time">
      <formatted-date
        :label="'Created: '"
        :date="item.createdTS"
        class="to-do-item-content__time__text"
      ></formatted-date>

      <formatted-date
        :label="'Done: '"
        :date="item.doneTS"
        v-if="item.done"
        class="to-do-item-content__time__text"
      ></formatted-date>
    </div>
  </div>
</template>

<script>
import { ListItem } from "../store/listItem";
import EditableSpan from "./editableSpan";
import FormattedDate from "./formattedDate";

export default {
  props: {
    item: {
      type: ListItem,
      required: true,
    },
  },
  components: {
    EditableSpan,
    FormattedDate,
  },
  methods: {
    updateItemName(payload) {
      const modifyEvent = {
        item: this.item,
        newName: payload,
      };

      this.$emit("modify-item", modifyEvent);
    },
  },
};
</script>

<style>
.to-do-item-content {
  display: flex;
  justify-content: stretch;
  align-items: center;
  min-height: 40px;
  min-width: 280px;

  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: black;
}

.to-do-item-content__name {
  flex: 3;
  align-self: stretch;
  
  border-right-style: dashed;
  border-right-width: 1px;
  border-right-color: black;
}

.to-do-item-content__time {
  flex: 1;
  align-self: stretch;
  padding-right: 4px;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

.to-do-item-content__time__text {
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
}
</style>