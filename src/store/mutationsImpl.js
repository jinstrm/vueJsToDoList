import {ListItem} from './listItem'

import {CHECK_ITEM, CREATE_ITEM, REMOVE_ITEM, CHANGE_OPEN_SORT, CHANGE_DONE_SORT, UPDATE_ITEM_NAME} from './mutations'

export const MUTATIONS = {
    [CHECK_ITEM](state, item) {
        const foundItem = state.list.find(element => element === item)
        foundItem.done = !foundItem.done
        if (foundItem.done) {
            foundItem.doneTS = new Date()
        }
        foundItem.modifiedTS = new Date()
    },

    [CREATE_ITEM] (state, name) {
        const newItem = new ListItem(name, false)
        state.list.push(newItem)
    },

    [REMOVE_ITEM] (state, item) {
        state.list = state.list.filter(e => e!== item)
    },

    [CHANGE_OPEN_SORT] (state, sort) {
        state.selectedOpenSorting = sort
    },

    [CHANGE_DONE_SORT] (state, sort) {
        state.selectedDoneSorting = sort
    },

    [UPDATE_ITEM_NAME] (state, payload) {
        const item = state.list.find(element => element === payload.item)
        item.name = payload.newName
        item.modifiedTS = new Date()
    }
}

