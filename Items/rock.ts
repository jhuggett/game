import { Item } from '.'
import { v4 as uuid } from 'uuid'

export class Rock implements Item {
  id: string
  link = 'rock'
  name = 'Rock'

  constructor(data?: Item) {
    if (data) {
      this.id = data.id
      this.name = data.name
    } else {
      this.id = uuid()
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