<template>
  <form action="">
    <self-input @input="val => selfInput = val" :value="selfInput"></self-input>
    <currency-input label="Price" v-model="price"></currency-input>
    <radio-input :value="1" :options="options" v-model="radio"></radio-input>
    <checkbox-input :default="1" :options="checkbox.options" v-model="checkboxValue"></checkbox-input>

    <input type="text" style="border: 1px solid;" v-on:input="testInput = arguments[0].target.value" :value="testInput">

    <input type="text" @keyup="update" :value="tval">


    <my-checkbox
      :checked="foo"
      @change="val => { foo = val }"
      :value="myCheckboxValue">
    </my-checkbox>

    <div>
      <input type="checkbox" value="a" v-model="cbox">
      <input type="checkbox" value="b" v-model="cbox">
      <input type="checkbox" value="c" v-model="cbox">
      <input type="checkbox" value="d" v-model="cbox">
      <input type="checkbox" value="e" v-model="cbox">
    </div>

  </form>
</template>

<script>
import currencyInpu from './_currencyInpu'
import selfInput from './_selfInput'
import radioInput from './_radioInput'
import checkboxInput from './_checkboxInput'
import myCheckbox from './_vueSelfCheckbox'

export default {
  data () {
    return {
      cbox: ["a", "b", "c"],
      foo: "1,3",
      price: 3,
      radio: 0,
      testInput: "123",
      tval: 11112,
      selfInput: "44444",
      myCheckboxValue: "1,2,3,4",
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
      ],
      checkboxValue: "1",
      checkbox: {
        default: "",
        value: "",
        options: [
          { name: "name1", value: 1 },
          { name: "name2", value: 2 },
          { name: "name3", value: 3 },
          { name: "name4", value: 4 },
        ]
      }
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
    },
    checkboxValue(val) {
      console.log(val)
    },
    testInput(val) {
      console.log(val);
    },
    tval(val) {
      console.log(val);
    },
    foo(val) {
      console.log(`foo: ${val}`);
    },
    cbox(val) {
      console.log(val)
    }
  },
  methods: {
    updateSelfInput(val) {
      this.selfInput = val
    },
    update() {
      console.log("触发keyup事件")
      this.tval = arguments[0].target.value
    }
  },
  components: {
    "self-input": selfInput,
    "currency-input": currencyInpu,
    "radio-input": radioInput,
    "checkbox-input": checkboxInput,
    "my-checkbox": myCheckbox,
  }
}
</script>


<style>

</style>
