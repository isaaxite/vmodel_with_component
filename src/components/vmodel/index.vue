<template>
  <form action="">
    <self-input @input="val => selfInput = val" :value="selfInput"></self-input>
    <currency-input label="Price" v-model="price"></currency-input>
    <radio-input :value="1" :options="options" v-model="radio"></radio-input>
  </form>
</template>

<script>
import currencyInpu from './_currencyInpu'
import selfInput from './_selfInput'
import radioInput from './_radioInput'

export default {
  data () {
    return {
      price: 1,
      radio: 0,
      selfInput: "",
      options: [
        {
          name: "A",
          value: 1,
        },
        {
          name: "B",
          value: 2,
        },
        {
          name: "C",
          value: 3,
        }
      ]
    }
  },
  watch: {
    price() {
      console.log(this.price);
    },
    selfInput(val) {
      console.log(val);
    },
    radio(val) {
      console.log(val);
    }
  },
  methods: {
    updateSelfInput(val) {
      this.selfInput = val
    }
  },
  components: {
    "self-input": selfInput,
    "currency-input": currencyInpu,
    "radio-input": radioInput
  }
}
</script>

<style>

</style>
