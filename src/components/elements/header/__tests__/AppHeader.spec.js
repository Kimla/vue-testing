import { mount } from '@vue/test-utils'
import AppHeader from '../AppHeader.vue'

describe('AppHeader', () => {
  it('renders out the header text', () => {
    const wrapper = mount(AppHeader, {
      propsData: {
        text: 'Home'
      }
    })

    expect(wrapper.html()).toContain('Home')
  })
})
