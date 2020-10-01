import { Item } from '.'

export class Rock implements Item {
  link = 'rock'
  name = 'Rock'

  constructor(data?: Item) {
    if (data) {
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