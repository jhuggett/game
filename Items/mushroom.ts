import { Item } from "Items";
import { getRandomItem } from "utils";


export class Mushroom implements Item {
  link = 'organic/mushroom'
  name: string

  constructor(data?: Item) {
    if (!data) {
      this.name = getRandomItem(['Red', 'Blue', 'Green', 'Purple', 'Brown', 'White']) + ' Mushroom'
    } else {
      this.name = data.name
    }
  }

  getImportantData() {
    return {
      link: this.link,
      name: this.name
    }
  }
}