<template>
  <div class="editable-span-container">
    <span v-show="!editMode" @dblclick="toEditMode" class="editableSpan__span">{{value}}</span>
    <input-text
      ref="editor"
      v-show="editMode"
      v-model="editField"
      :placeholder="''"
      @blur="storeChanges"
      @submit="storeChanges"
      class="editableSpan__input"
    ></input-text>
  </div>
</template>

<script>
import InputText from "./inputText";

export default {
  data() {
    return {
      editField: "",
      editMode: false,
    };
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    toEditMode() {
      this.editField = this.value;
      this.editMode = true;

      this.$nextTick(() => this.focusInput());
    },

    storeChanges() {
      this.editMode = false;

      if (this.editField !== this.value)
      {
        this.$emit('input', this.editField)
      }
    },

    focusInput() {
      this.$refs.editor.$el.focus();
    },
  },
  components: {
    InputText,
  },
};
</script>

<style>

.editable-span-container {
  font-size: inherit;
  font-weight: inherit;
  font: inherit;
  display: flex;
}

.editableSpan__span {
  font-size: inherit;
  font-weight: inherit;
  font: inherit;
  width: calc(100% - 10px);
  margin-left: 5px;
  border: none;
  align-self: center;
  padding: 4px 0 4px 0;
}
.editableSpan__input {
  font-size: inherit;
  font-weight: inherit;
  font: inherit;
  width: calc(100% - 10px);
  margin-left: 5px;
  border: none;
  border-width: 0px;
  outline: none;
  outline-width: 0px;
}
</style>