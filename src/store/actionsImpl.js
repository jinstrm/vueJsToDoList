import { CLEAR_OPEN_LIST, CLEAR_DONE_LIST, CHECK_LIST_ITEM, CREATE_LIST_ITEM, REMOVE_LIST_ITEM, UPDATE_LIST_ITEM_NAME } from "./actions"
import { TO_DO_ITEMS, DONE_ITEMS } from "./getters"
import { REMOVE_ITEM, CHECK_ITEM, CREATE_ITEM, UPDATE_ITEM_NAME } from "./mutations"
import {PUT_INTO_STORAGE} from "../localstorage/storageActionsImpl"

function removeItems(items, fromList, commit) {
    if (items) {
        items.forEach(el => {
            if (fromList.includes(el)) {
                commit(REMOVE_ITEM, el)
            }
        });
    }
}

export const ACTIONS = {
    [CLEAR_OPEN_LIST]({ state, getters, commit }, items) {
        const fromList = getters[TO_DO_ITEMS]
        removeItems(items, fromList, commit)
        PUT_INTO_STORAGE(state.list)
    },
    [CLEAR_DONE_LIST]({ state, getters, commit }, items) {
        const fromList = getters[DONE_ITEMS]
        removeItems(items, fromList, commit)
        PUT_INTO_STORAGE(state.list)
    },
    [CHECK_LIST_ITEM]({state, commit}, item) {
        commit(CHECK_ITEM, item)
        PUT_INTO_STORAGE(state.list)
    },
    [CREATE_LIST_ITEM]({state, commit}, name) {
        commit(CREATE_ITEM, name)
        PUT_INTO_STORAGE(state.list)
    },
    [REMOVE_LIST_ITEM]({state, commit}, item) {
        commit(REMOVE_ITEM, item)
        PUT_INTO_STORAGE(state.list)
    },
    [UPDATE_LIST_ITEM_NAME]({state, commit}, payload) {
        commit(UPDATE_ITEM_NAME, payload)
        PUT_INTO_STORAGE(state.list)
    },

}