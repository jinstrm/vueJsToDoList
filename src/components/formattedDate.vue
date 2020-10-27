<template>
  <span>{{label}}{{formattedDate}}</span>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      required: true,
    },
    label: {
      type: String,
      default: "",
    }
  },
  computed: {
    formattedDate() {
      const dateTimeFormat = new Intl.DateTimeFormat("en-u-hc-h24", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      return dateTimeFormat.format(this.date);
    },
  },
};
</script>

<style>

</style>