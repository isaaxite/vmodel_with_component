<template>
  <mt-radio
    title="单选框列表"
    v-model="value"
    :options="['选项A', '选项B', '选项C']">
  </mt-radio>
</template>

<script>
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

export default {
  data () {
    return {
      value: "选项A"
    }
  },
  watch: {
    value() {
      console.log(this.value);
    }
  }
}
</script>

<style>

</style>
