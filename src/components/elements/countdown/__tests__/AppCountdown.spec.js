import { mount } from '@vue/test-utils'
import AppCountdown from '../AppCountdown.vue'

jest.useFakeTimers()

describe('AppHeader', () => {
  it('renders the initial start value', () => {
    const wrapper = mount(AppCountdown, {
      propsData: {
        start: 5
      }
    })

    expect(wrapper.html()).toContain('5')
  })

  it('sets an interval for the countdown', () => {
    mount(AppCountdown, {
      propsData: {
        start: 5
      }
    })

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000)

    jest.clearAllTimers()
  })

  it('decrements the number', () => {
    const wrapper = mount(AppCountdown, {
      propsData: {
        start: 5
      }
    })

    jest.advanceTimersByTime(1000)

    expect(wrapper.html()).toContain('4')

    jest.clearAllTimers()
  })

  it('clears the interval when the timer is finished', () => {
    const wrapper = mount(AppCountdown, {
      propsData: {
        start: 5
      }
    })

    jest.advanceTimersByTime(5000)

    expect(setInterval).toHaveBeenCalled()
    expect(wrapper.html()).toContain('0')

    jest.clearAllTimers()
  })
})
