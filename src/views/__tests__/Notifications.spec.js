import { mount, createLocalVue } from '@vue/test-utils'
import Notifications from '../Notifications.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Notifications', () => {
  it('renders notifications', () => {
    const store = new Vuex.Store({
      getters: {
        notifications: () => [
          {
            id: 1,
            body: 'One'
          },
          {
            id: 2,
            body: 'Two'
          }
        ]
      },
      actions: {
        getNotifications: () => []
      }
    })

    const wrapper = mount(Notifications, {
      localVue,
      store
    })

    const items = wrapper.findAll('li')

    expect(items.at(0).text()).toContain('One')
    expect(items.at(1).text()).toContain('Two')
  })

  it('it marks a notification as read', () => {
    const notifcation = {
      id: 1,
      body: 'One',
      read: false
    }

    const markNotificationRead = jest.fn()

    const store = new Vuex.Store({
      getters: {
        notifications: () => [notifcation]
      },
      actions: {
        getNotifications: () => [],
        markNotificationRead: markNotificationRead
      }
    })

    const wrapper = mount(Notifications, {
      localVue,
      store
    })

    wrapper
      .findAll('a')
      .at(0)
      .trigger('click')

    expect(markNotificationRead.mock.calls[0][1]).toEqual(notifcation)
  })
})
