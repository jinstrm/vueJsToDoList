<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="handleInputEvent"
    @blur="$emit('blur')"
    @keydown.enter="handleEnter"
  />
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Type here",
    },
    inputTimeout: {
      type: Number,
      default: 0,
    },
    inputEvent: {
      type: String,
      default: "input",
    },
  },

  data() {
    return {
      timeout: null,
    };
  },

  methods: {
    handleEnter(event) {
      this.handleInputEvent(event, true)
      this.$emit('submit')
    },

    handleInputEvent(event, immediate) {
      const eventValue = event.target.value;

      if (immediate) {
        clearTimeout(this.timeout);
        this.emitEvent(eventValue);
      } else if (this.inputTimeout) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.emitEvent(eventValue);
        }, this.inputTimeout);
      } else {
        this.emitEvent(eventValue);
      }
    },

    emitEvent(eventValue) {
      this.$emit(this.inputEvent, eventValue);
    },
  },
};
</script>
<style>
</style>