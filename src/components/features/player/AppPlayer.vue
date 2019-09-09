<template>
  <div>
      player
  </div>
</template>

<script>
export default {
  data: () => ({
    player: null
  }),
  destroyed () {
    this.player = null
  },
  mounted () {
    this.player = 'instance'
  }
}
</script>

<style>
</style>
