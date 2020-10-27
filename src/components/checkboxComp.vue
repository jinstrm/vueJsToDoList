<template>
  <div class="checkbox_container">
    <input type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" />
    <label>
      <div></div>
    </label>
  </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>
.checkbox_container {
  margin: 0 auto;
  display: block;
  height: 35px;
  border: solid 1px rgba(0,0,0,0);
  border-radius: 4px;
  position: relative;
}
.checkbox_container label {
  height: 33px;
  width: 33px;
  z-index: 0;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}
.checkbox_container label div {
  height: 18px;
  width: 18px;
  border: solid 2px rgba(0,0,0,.4);
  margin: 7px;
  border-radius: 50%;
  transform: rotate(45deg);
  transition: all 100ms ease-in-out, border 50ms ease 100ms;
}
.checkbox_container input {
  height: 33px;
  width: 33px;
  margin: 0;
  opacity: 0;
  z-index: 1;
  position: relative;
  cursor: pointer;
}
.checkbox_container input:checked + label > div {
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-color: rgb(44, 62, 80);
  height: 20px;
  width: 7px;
  margin-top: 3px;
  margin-left: 14px;
  transform: rotate(40deg);
  transition: all 150ms ease-in-out;
}
</style>