<template>
  <div>
      <ul>
        <li
          v-for="notification in notifications"
          :key="notification.id"
        >
          {{ notification.body }}
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    notifications: []
  }),
  methods: {
    async getNotifications () {
      const res = await axios.get('/notifications.json')

      this.notifications = res.data.data
    }
  },
  mounted () {
    this.getNotifications()
  }
}
</script>

<style>
</style>
