export function ListItem(itemName, itemDone, createdTS, doneTS) {
    const createdTimeComputed = new Date()
    let doneTimeComputed = null
    if (itemDone) {
        doneTimeComputed = new Date()
    }

    this.name = itemName
    this.createdTS = createdTS ? createdTS : createdTimeComputed
    this.done = itemDone
    this.doneTS = doneTS ? doneTS : doneTimeComputed
    this.modifiedTS = new Date()
}