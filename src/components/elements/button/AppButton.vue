<template>
  <router-link :to="to">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: Object,
      required: true
    }
  }
}
</script>
