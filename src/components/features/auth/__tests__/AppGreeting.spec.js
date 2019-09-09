import { mount } from '@vue/test-utils'
import AppGreeting from '../AppGreeting.vue'

describe('AppGreeting', () => {
  it('greets  the user by their first name', () => {
    const auth = {
      computed: {
        $auth () {
          return {
            user: {
              first_name: 'Alex'
            }
          }
        }
      }
    }

    const wrapper = mount(AppGreeting, {
      mixins: [auth]
    })

    expect(wrapper.html()).toContain('Hi, Alex')
  })
})
