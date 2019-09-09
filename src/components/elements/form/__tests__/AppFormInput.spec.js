import { mount } from '@vue/test-utils'
import AppFormInput from '../AppFormInput'

describe('AppFormInput', () => {
  it('set the initial model value', () => {
    const wrapper = mount(AppFormInput, {
      propsData: {
        modelValue: 'cats'
      }
    })

    expect(wrapper.find('input').element.value).toContain('cats')
  })

  it('emits an input event when typing', () => {
    const wrapper = mount(AppFormInput)

    const input = wrapper.find('input')

    input.trigger('input')

    expect(wrapper.emitted().input).toBeTruthy()
  })

  it('emits the current input value when typing', () => {
    const wrapper = mount(AppFormInput)

    const input = wrapper.find('input')

    input.element.value = 'cats'
    input.trigger('input')

    expect(wrapper.emitted().input[0][0]).toEqual('cats')
  })
})
