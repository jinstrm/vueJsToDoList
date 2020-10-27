const sortOptionCodes = {
    CREATED_ASC: 'CREATED_ASC',
    CREATED_DESC: 'CREATED_DESC',
    DONE_ASC: 'DONE_ASC',
    DONE_DESC: 'DONE_DESC',
    RECORDS_ASC: 'RECORDS_ASC',
    RECORDS_DESC: 'RECORDS_DESC'
}

const sortingAlgorithms = {
    [sortOptionCodes.CREATED_ASC]: (el1, el2) => el1.createdTS - el2.createdTS,
    [sortOptionCodes.CREATED_DESC]: (el1, el2) => el2.createdTS -  el1.createdTS,
    [sortOptionCodes.DONE_ASC]: (el1, el2) => el1.doneTS - el2.doneTS,
    [sortOptionCodes.DONE_DESC]: (el1, el2) => el2.doneTS - el1.doneTS,
    [sortOptionCodes.RECORDS_ASC]: (el1, el2) => el1.name.localeCompare(el2.name),
    [sortOptionCodes.RECORDS_DESC]: (el1, el2) => el2.name.localeCompare(el1.name),
}

export function SortOption(sortName, sortCode) {
    this.name = sortName
    this.code = sortCode
}

export const OPEN_SORT_OPTIONS = [
    new SortOption('Created (ASC)', sortOptionCodes.CREATED_ASC),
    new SortOption('Created (DESC)', sortOptionCodes.CREATED_DESC),
    new SortOption('Records (ASC)', sortOptionCodes.RECORDS_ASC),
    new SortOption('Records (DESC)', sortOptionCodes.RECORDS_DESC),
]

export const DONE_SORT_OPTIONS = [
    new SortOption('Done (ASC)', sortOptionCodes.DONE_ASC),
    new SortOption('Done (DESC)', sortOptionCodes.DONE_DESC),
    new SortOption('Records (ASC)', sortOptionCodes.RECORDS_ASC),
    new SortOption('Records (DESC)', sortOptionCodes.RECORDS_DESC),
]


export function SORT(list, option) {
    list.sort(sortingAlgorithms[option])
    return list
}