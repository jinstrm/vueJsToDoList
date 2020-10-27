import { mount } from '@vue/test-utils'
import ButtonComp from '@/components/buttonComp.vue'

describe('buttonComponent.vue', () => {
    it('renders a button with default name', () => {
        const wrapper = mount(ButtonComp)
        const txt = 'Ok'

        const button = wrapper.find('button')
        expect(button.html()).toContain(txt)
    })

    it('renders a button with specified name', () => {
        const txt = 'Custom Name'
        const wrapper = mount(ButtonComp, {
            propsData: {
                name: txt
            }
        })

        const button = wrapper.find('button')
        expect(button.html()).toContain(txt)
    })


    it('emits default event whjen button is clicked', async () => {
        const wrapper = mount(ButtonComp)
        const button = wrapper.find('button')
        button.trigger('click')

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().click).toBeTruthy()
        expect(wrapper.emitted().click.length).toBe(1)
    })

    it('emits specified event whjen button is clicked', async () => {
        const wrapper = mount(ButtonComp, {
            propsData: {
                clickEvent: 'custom'
            }
        })
        const button = wrapper.find('button')
        button.trigger('click')

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().custom).toBeTruthy()
        expect(wrapper.emitted().custom.length).toBe(1)
    })


})