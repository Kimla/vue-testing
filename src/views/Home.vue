<template>
  <div>
    <AppCountdown :start="5" />
  </div>
</template>

<script>
import AppCountdown from '@/components/elements/countdown/AppCountdown'

export default {
  components: {
    AppCountdown
  }
}
</script>
