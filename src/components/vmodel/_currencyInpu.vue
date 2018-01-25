<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">
  </div>
</template>

<script>
export default {
  name: "currencyInpu",
  props: {
    value: {
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted: function () {
    this.formatValue()
  },
  methods: {
    updateValue: function (value) {
      this.$refs.input.value = value
      this.$emit('input', +value)
    },
    formatValue: function () {
      this.$refs.input.value = this.value
    },
    selectAll: function (event) {
      setTimeout(function () {
      	event.target.select()
      }, 0)
    }
  }
}
</script>

<style>

</style>
