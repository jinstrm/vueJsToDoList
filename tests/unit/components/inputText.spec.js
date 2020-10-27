import { mount } from '@vue/test-utils'
import InputText from '@/components/inputText.vue'

describe('inputText.vue', () => {
    it('renders input with default palceholder', () => {
        const value = ''
        const wrapper = mount(InputText, {
            propsData: {
                value: value
            }
        })
        const txt = 'Type here'
        const input = wrapper.find('input')

        expect(input.element.placeholder).toBe(txt)
    })

    it('renders input with palceholder from props', () => {
        const value = ''
        const txt = 'Custom placeholder'
        const wrapper = mount(InputText, {
            propsData: {
                value: value,
                placeholder: txt
            }
        })
        const input = wrapper.find('input')

        expect(input.element.placeholder).toBe(txt)
    })

    it('emits input event on changing value', async () => {
        const value = ''
        const wrapper = mount(InputText, {
            propsData: {
                value: value,
            }
        })
        const input = wrapper.find('input')
        const userTyping = 'some typing'

        input.setValue(userTyping)

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().input).toBeTruthy()
        expect(wrapper.emitted().input.length).toBe(1)
        expect(wrapper.emitted().input[0][0]).toBe(userTyping)
    })

    it('emits input event when ures stops typing', async () => {
        jest.useFakeTimers()

        const value = ''
        const wrapper = mount(InputText, {
            propsData: {
                value: value,
                inputTimeout: 500,
            }
        })
        const input = wrapper.find('input')
        const userTyping = 'some typing'
        const userTypingSecond = 'some typing second time'

        input.setValue(userTyping)
        input.setValue(userTypingSecond)

        expect(wrapper.emitted().input).toBeFalsy()

        jest.runAllTimers();
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().input).toBeTruthy()
        expect(wrapper.emitted().input.length).toBe(1)
        expect(wrapper.emitted().input[0][0]).toBe(userTypingSecond)
    })

    it('emits custom event on input when specified', async () => {
        const value = ''
        const wrapper = mount(InputText, {
            propsData: {
                value: value,
                inputEvent: 'customEvent',
            }
        })

        const input = wrapper.find('input')
        const userTyping = 'some typing'

        input.setValue(userTyping)

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().customEvent).toBeTruthy()
        expect(wrapper.emitted().customEvent.length).toBe(1)
        expect(wrapper.emitted().customEvent[0][0]).toBe(userTyping)
    })

    it('emits blur event when triggered on input', async () => {
        const value = ''
        const wrapper = mount(InputText, {
            propsData: {
                value: value,
            }
        })

        const input = wrapper.find('input')
        input.trigger('blur')

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().blur).toBeTruthy()
        expect(wrapper.emitted().blur.length).toBe(1)
    })
})