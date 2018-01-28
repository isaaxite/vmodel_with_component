<template>
  <div>
    <input type="text" name="name" :value="value" @keyup="updateValue">
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: [String, Number],
  },
  data () {
    return {
      
    }
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
