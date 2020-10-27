import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {ListItem} from './listItem'
import {MUTATIONS} from './mutationsImpl'
import {ACTIONS} from './actionsImpl'
import {GETTERS} from './gettersImpl'
import {OPEN_SORT_OPTIONS, DONE_SORT_OPTIONS} from './sorting'
import {LOAD_FROM_STORAGE} from "../localstorage/storageActionsImpl"

function prepareList() {
  const loadedList = LOAD_FROM_STORAGE()
  if (loadedList) {
    return loadedList
  }

  else return [
    new ListItem('All new tasks appear here', false),
    new ListItem('Double click to edit text', false),
    new ListItem('<--- To complete task click empty circle', false),
    new ListItem('To remove task hover and click the cross icon', false),
    new ListItem('All completed tasks appear here', true),
    new ListItem('Tasks created and completed time appear there --->', true),
    new ListItem('<--- Click check button to move task back into Open', true),
  ]
}

export default new Vuex.Store({
  state: {
    list: prepareList(),
    
    openSortOptions: OPEN_SORT_OPTIONS,
    doneSortOptions: DONE_SORT_OPTIONS,

    selectedOpenSorting: OPEN_SORT_OPTIONS[0],
    selectedDoneSorting: DONE_SORT_OPTIONS[0],
    
  },

  getters: GETTERS,
  mutations: MUTATIONS,
  actions: ACTIONS,
  modules: {
  }
})
