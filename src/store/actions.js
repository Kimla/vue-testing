import axios from 'axios'

export default {
  async getNotifications ({ commit }) {
    const res = await axios.get('/notifications.json')

    commit('SET_NOTIFICATIONS', res.data.data)
  },
  async markNotificationRead ({ commit }, notification) {
    await axios.get('/notifications.json')

    commit('SET_NOTIFICATION_READ', notification)
  }
}
