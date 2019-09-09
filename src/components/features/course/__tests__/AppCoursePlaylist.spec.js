import { mount } from '@vue/test-utils'
import AppCoursePlaylist from '../AppCoursePlaylist.vue'
import AppCoursePart from '../AppCoursePart'

describe('AppHeader', () => {
  it('renders a list of parts', () => {
    const wrapper = mount(AppCoursePlaylist, {
      propsData: {
        course: {
          parts: [{ id: 1, title: 'One' }, { id: 2, title: 'Two' }]
        }
      }
    })

    expect(wrapper.findAll(AppCoursePart).length).toEqual(2)
  })
})
