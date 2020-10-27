<template>
  <button @click="handleClick">{{name}}</button>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "Ok",
    },
    clickEvent: {
      type: String,
      default: "click",
    },
  },

  methods: {
    handleClick() {
      this.$emit(this.clickEvent);
    },
  },
};
</script>