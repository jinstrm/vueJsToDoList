<template>
  <div class="item-creation">
    <input-text
      v-model="newItemName"
      :placeholder="'Create New Item'"
      @submit="createNewItem"
      class="item-creation__input"
    ></input-text>
    <button-comp :name="'Add'" @click="createNewItem" class="item-creation__button"></button-comp>
  </div>
</template>

<script>
import InputText from "../components/inputText";
import ButtonComp from "../components/buttonComp";

export default {
  data() {
    return {
      newItemName: "",
    };
  },
  methods: {
    createNewItem() {
      if (this.newItemName && this.newItemName!== "") {
        this.$emit("create-item", this.newItemName);
        this.newItemName = "";
      }
    },
  },
  components: {
    InputText,
    ButtonComp,
  },
};
</script>

<style>
.item-creation {
  display: flex;
  justify-content: center;
  margin: 50px 50px;
}

.item-creation__button {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 4px;
  position: relative;
  background-color: rgb(44, 62, 80);
  border: none;
  color: #fff;
  padding: 10px;
  width: 150px;
  text-align: center;
  border-radius: 0 5px 5px 0;
}

.item-creation__input {
  flex-grow: 1;
  align-self: stretch;
  min-width: 280px;

  outline: none;
  outline-width: 0px;

  border-color: black;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px 0 0 5px;

  border-right: none;

  padding-left: 4px;
}
</style>