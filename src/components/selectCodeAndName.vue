<template>
<span class="custom-dropdown">
  <select :value="selected.code" @input="handleSelect">
    <option v-for="option in options" :value="option.code" :key="option.code">{{option.name}}</option>
  </select>
</span>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
            validator: prop => {
                return prop.length > 0 && prop.every(e => e.code && e.name)
            },
        },
        selected: {
            validator: prop => prop.code && prop.name
        }
    },
    methods: {
        handleSelect(event) {
            const code = event.target.value
            const selectedOption = this.options.find(e => e.code === code)
            this.$emit('select', selectedOption)
        }
    }
}
</script>

<style>
.custom-dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 10px; /* demo only */
}

.custom-dropdown select {
  background-color: rgb(44, 62, 80);
  color: #fff;
  font-size: 14px;
  padding: .5em;
  padding-right: 2.5em; 
  border: 0;
  margin: 0;
  border-radius: 3px;
  text-indent: 0.01px;
  text-overflow: '';
  -webkit-appearance: none; /* hide default arrow in chrome OSX */
}

.custom-dropdown::before,
.custom-dropdown::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.custom-dropdown::after { /*  Custom dropdown arrow */
  content: "\25BC";
  height: 1em;
  font-size: .625em;
  line-height: 1;
  right: .7em;
  top: 50%;
  margin-top: -.4em;
}

.custom-dropdown::before { /*  Custom dropdown arrow cover */
  width: 1.6em;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 3px 3px 0;
}

.custom-dropdown select[disabled] {
  color: rgba(0,0,0,.3);
}

.custom-dropdown select[disabled]::after {
  color: rgba(0,0,0,.1);
}

.custom-dropdown::before {
  background-color: rgba(0,0,0,.15);
}

.custom-dropdown::after {
  color: rgba(255, 255, 255, 0.6);
}
</style>