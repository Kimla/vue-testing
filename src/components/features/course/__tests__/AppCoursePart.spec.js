import { mount } from '@vue/test-utils'
import AppCoursePart from '../AppCoursePart'

describe('AppCoursePart', () => {
  it('renders a list of parts', () => {
    const wrapper = mount(AppCoursePart, {
      propsData: {
        part: { id: 1, title: 'One' }
      }
    })

    const play = jest.fn()

    wrapper.setMethods({ play })

    wrapper.find('a').trigger('click')

    expect(play).toBeCalled()
    // expect(wrapper.findAll(AppCoursePart).length).toEqual(2)
  })
})
