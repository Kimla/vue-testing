import { mount } from '@vue/test-utils'
import AppPlayer from '../AppPlayer.vue'

describe('AppPlayer', () => {
  it('clears up when destroyed', () => {
    const wrapper = mount(AppPlayer)

    expect(wrapper.vm.player).toBe('instance')

    wrapper.destroy()

    expect(wrapper.vm.player).toBe(null)
  })
})
