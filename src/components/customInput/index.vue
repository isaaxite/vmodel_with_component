<template>
  <div>
    <cinput @input="val => something = val" :value="something"></cinput>
  </div>
</template>

<script>
import customInput from './_input'

export default {
  data () {
    return {
      something: "i am isaac_宝华",
    }
  },
  watch: {
    something(val) {
      console.log(val)
    }
  },
  components: {
    "cinput": customInput
  }
}
</script>