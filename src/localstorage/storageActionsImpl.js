import {ListItem} from "../store/listItem"

const LOCAL_STORAGE_KEY = 'toDoListStorage'

export function LOAD_FROM_STORAGE() {
    const loadedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const listItems = []
    if (loadedItems && loadedItems instanceof Array) {
        loadedItems.forEach(el => {
            const item = new ListItem(el.name, el.done, new Date(el.createdTS), new Date(el.doneTS))
            listItems.push(item)
        })
        return listItems
    }
    else return undefined
}


export function PUT_INTO_STORAGE(list) {
    const listItems = list.filter(el => el instanceof ListItem)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listItems))
}