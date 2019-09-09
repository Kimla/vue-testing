<template>
  <div>
    <a
      v-if="!revealed"
      href=""
      @click.prevent="revealed = true"
    >
      Click to reveal
    </a>

    <div v-if="revealed">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data: () => ({
    revealed: false
  })
}
</script>
