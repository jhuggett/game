import { Item, traverseItemDirectory, DirectoryLevel } from "Items"
import { Persistant, Persistor } from "Persistance"


function getItem(data: Item) : Item {
  const level = traverseItemDirectory(data.link.split('/'))
  if (level.createItem) {
    return level.createItem(data)
  }
  return
}

export class Inventory implements Persistant {

  constructor(ownerId: string) {
    this.key = `${ownerId}-inventory`
  }
  
  items: Item[] = []

  key: string

  addItem(item: Item) {
    this.items.push(item)
    this.persist()
  }

  removeItem(item: Item) {
    this.items = this.items.filter(invetoryItem => item.id != invetoryItem.id)
    this.persist()
  }

  persist() {    
    Persistor.persist(this.key, {
      items: this.items.map(item => item.getImportantData())
    })
  }

  retrieve() {
    const data = Persistor.retrieve(this.key)
    if (!data) return
    this.items = data.items.map((itemData: Item) => getItem(itemData))
  }

}