import {DONE_ITEMS, TO_DO_ITEMS} from './getters'

import {SORT} from "./sorting"

export const GETTERS = {
    [DONE_ITEMS]: state => {
        return SORT(state.list.filter(element => element.done), state.selectedDoneSorting.code)
    },
    [TO_DO_ITEMS]: state => {
        return SORT(state.list.filter(element => !element.done), state.selectedOpenSorting.code)
    }
}