import { mount, RouterLinkStub } from '@vue/test-utils'
import AppProSignIn from '../AppProSignIn.vue'

describe('AppButton', () => {
  const $route = {
    fullPath: '/dashboard'
  }

  it('renders a sign in link', () => {
    const wrapper = mount(AppProSignIn, {
      stubs: {
        RouterLink: RouterLinkStub
      },

      mocks: {
        $route
      }
    })

    expect(wrapper.find('a').props().to.name).toEqual('auth-signin')
  })

  it('renders a sign in link with a redirect to the current path', () => {
    const wrapper = mount(AppProSignIn, {
      stubs: {
        RouterLink: RouterLinkStub
      },

      mocks: {
        $route
      }
    })

    expect(wrapper.find('a').props().to.query.redirect).toEqual('/dashboard')
  })
})
