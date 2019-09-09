import { mount } from '@vue/test-utils'
import AppNotifications from '../AppNotifications'
import flushPromises from 'flush-promises'

jest.mock('axios', () => {
  return {
    get: () =>
      Promise.resolve({
        data: {
          data: [
            {
              id: 1,
              body: 'Test'
            },
            {
              id: 2,
              body: 'Test 2'
            }
          ]
        }
      })
  }
})

describe('AppNotifications', () => {
  it('renders a list of notifications', done => {
    const wrapper = mount(AppNotifications)

    flushPromises().then(() => {
      let items = wrapper.findAll('li')

      expect(items.at(0).text()).toContain('Test')
      expect(items.at(1).text()).toContain('Test 2')
      done()
    })
  })
})
