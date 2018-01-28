<template>
  <div>
    <mt-radio
      title="单选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']">
    </mt-radio>

    <mt-checklist
      title="右对齐"
      v-model="checkbox.value"
      :options="checkbox.options">
    </mt-checklist>

    <button @click="check">check</button>
  </div>
</template>

<script>
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

export default {
  data () {
    return {
      value: "选项A",
      checkbox: {
        value: ["值A"],
        options: [
          {
            label: '被禁用',
            value: '值F',
          },
          {
            label: '选中禁用',
            value: '选中禁用的值',
          },
          {
            label: '选项A',
            value: '值A'
          },
          {
            label: '选项B',
            value: '值B'
          }
        ]
      }
    }
  },
  watch: {
    value() {
      console.log(this.value);
    },
    checkbox(val) {
      console.log(val.value);
    }
  },
  methods: {
    check() {
      console.log(this.checkbox.value);
    }
  }
}
</script>

<style>

</style>
