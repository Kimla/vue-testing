<template>
  <div>
    <AppFormInput v-model="value" />
    {{ value }}
  </div>
</template>

<script>
import AppFormInput from '@/components/elements/form/AppFormInput'

export default {
  components: {
    AppFormInput
  },
  data: () => ({
    value: 'abc'
  })
}
</script>
