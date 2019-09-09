import { mount } from '@vue/test-utils'
import AppHello from '../AppHello'

describe('AppHello', () => {
  it('renders out the hello text', () => {
    const wrapper = mount(AppHello)

    expect(wrapper.html()).toContain('Hello')
  })
})
