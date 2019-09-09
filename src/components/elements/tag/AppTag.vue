<template>
  <div
    :class="{
        'tag--dark': dark
    }"
    class="tag"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
