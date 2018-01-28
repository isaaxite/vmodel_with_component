<template>
  <div>
    <label for="jack">Jack</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    
    <label for="john">John</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    
    <label for="mike">Mike</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedNames: ["Jack", "John"]
    }
  },
  watch: {
    checkedNames(val) {
      console.log(val)
    }
  }
}
</script>