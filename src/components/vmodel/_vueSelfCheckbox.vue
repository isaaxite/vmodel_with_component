<template>
  <div class="self-checbox">
    <label v-for="(item,index) in values" :for="`vue-self-checkbox${index}`">
      <span></span>
      <input type="checkbox" :id="`vue-self-checkbox${index}`" :value="item">
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: String,
    checked: {
      type: [Number,String],
      default: 0
    }
  },
  data () {
    return {
      valArr: this.checked.split(','),
      checking: ["1", "2"]
    }
  },
  computed: {
    values() {
      console.log(this.value, this.value.split(','));
      return this.value.split(',');
    }
  },
  methods: {
    updateValue(e) {
      /* let checkboxs = document.querySelectorAll(".self-checbox input");
      let checkboxVals = [];
      for (let index = 0; index < checkboxs.length; index++) {
        const element = checkboxs[index];
        let isSelect = element.checked;

        isSelect && checkboxVals.push(element.value);
      }
      
      this.$emit('change', checkboxVals.join(',')); */
    }
  }
}
</script>

<style>

</style>
