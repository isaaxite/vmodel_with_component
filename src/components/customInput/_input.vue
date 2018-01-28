<template>
  <div>
    <input type="text" name="name" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: [String, Number],
  }
}
</script>
