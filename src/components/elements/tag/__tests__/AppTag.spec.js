import { mount } from '@vue/test-utils'
import AppTag from '../AppTag.vue'

describe('AppTag', () => {
  it('renders out the tag text', () => {
    const wrapper = mount(AppTag, {
      propsData: {
        text: 'vue'
      }
    })

    expect(wrapper.html()).toContain('vue')
  })

  it('renders the plain theme by default', () => {
    const wrapper = mount(AppTag, {
      propsData: {
        text: 'vue'
      }
    })

    expect(wrapper.classes()).toEqual(['tag'])
  })

  it('renders the dark theme if set', () => {
    const wrapper = mount(AppTag, {
      propsData: {
        text: 'vue',
        dark: true
      }
    })

    expect(wrapper.classes()).toContain('tag--dark')
  })
})
