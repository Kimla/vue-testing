import mutations from '../mutations'

describe('mutations', () => {
  it('can set notifications', () => {
    const state = {
      notifications: []
    }

    mutations.SET_NOTIFICATIONS(state, [{ id: 1 }, { id: 2 }])

    expect(state.notifications.length).toEqual(2)
  })

  it('can set notification as read', () => {
    const notification = {
      id: 1,
      body: 'First notification',
      read: false
    }

    const state = {
      notifications: [notification]
    }

    mutations.SET_NOTIFICATION_READ(state, notification)

    expect(notification.read).toBe(true)
  })
})
