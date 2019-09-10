import actions from '../actions'
import flushPromises from 'flush-promises'

const mockGetPayload = [{ id: 1, body: 'One' }]

jest.mock('axios', () => {
  return {
    get () {
      return Promise.resolve({
        data: {
          data: mockGetPayload
        }
      })
    }
  }
})

describe('actions', () => {
  it('can get notifications', async () => {
    const commit = jest.fn()

    actions.getNotifications({ commit })

    await flushPromises()

    expect(commit).toBeCalledWith('SET_NOTIFICATIONS', mockGetPayload)
  })

  it('can mark a notification as read', async () => {
    const commit = jest.fn()

    const notification = {
      id: 1,
      body: 'One',
      read: false
    }

    actions.markNotificationRead({ commit }, notification)

    await flushPromises()

    expect(commit).toBeCalledWith('SET_NOTIFICATION_READ', notification)
  })
})
