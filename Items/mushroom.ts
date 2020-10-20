import { Item } from "Items";
import { getRandomItem } from "utils";
import { v4 as uuid } from 'uuid'


export class Mushroom implements Item {
  id: string
  link = 'organic/mushroom'
  name: string

  constructor(data?: Item) {
    if (!data) {
      this.id = uuid()
      this.name = getRandomItem(['Red', 'Blue', 'Green', 'Purple', 'Brown', 'White']) + ' Mushroom'
    } else {
      this.name = data.name
      this.id = data.id
    }
  }

  getImportantData() {
    return {
      id: this.id,
      link: this.link,
      name: this.name
    }
  }
}