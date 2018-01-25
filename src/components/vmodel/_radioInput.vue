<template>
  <div>
    <label v-for="option in options">
      <span>{{option.label||option.name}}</span>
      <input type="radio" :name="option.name" :value="option.value" v-model="currentVal">
    </label>
  </div>
</template>

<script>
export default {
  name:'ui-radio',//radio组件名称
  props: {
    options: {
      type: Array,
      require: true
    },
    value: [String, Number]
  },
  data () {
    return {
      currentVal: this.value,
    }
  },
  mounted () {
    console.log(process.env.NODE_ENV);
  },
  watch: {
    value(val) {
      this.currentVal = val
    },
    currentVal(val) {
      this.$emit('input', val);
    }
  }
}
</script>

<style>

</style>
