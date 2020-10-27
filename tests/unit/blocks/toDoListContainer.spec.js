import { mount } from '@vue/test-utils'
import ToDoListContainer from '@/blocks/toDoListContainer.vue'
import ToDoListHeader from '@/blocks/toDoListHeader.vue'
import ToDoListBody from '@/blocks/toDoListBody.vue'

describe('toDoListContainer.vue', () => {
    it('should render toDoListHeader and toDoListBody', () => {
        const wrapper = mount(ToDoListContainer)

        const div = wrapper.find('div')
        const toDoListHeader = div.findComponent(ToDoListHeader)
        const toDoListBody = div.findComponent(ToDoListBody)

        expect(toDoListHeader.exists()).toBe(true)
        expect(toDoListBody.exists()).toBe(true)
    })
})