<template>
  <div>
    <label v-for="(option, index) in options" for="`checkout-box${index}`">
      <span>{{label}}</span>
      <input type="checkbox" :id="`checkout-box${index}`" @change="updateValue" :value="option.value">
    </label>
  </div>
</template>

<script>
export default {
  name: "checkbox-input",
  props: {
    label: {
      type: String,
      default: ""
    },
    default: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    // console.log(this.default);
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>
