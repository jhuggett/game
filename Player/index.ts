import { Persistant, Persistor } from '../Persistancy';
import { v4 as uuid } from 'uuid'

export class Inventory implements Persistant {

  constructor(ownerId: string) {
    this.key = `${ownerId}-inventory`
  }
  

  key: string

  persist() {

  }

  retrieve() {

  }

}


export class Player implements Persistant {
  id: string

  inventory: Inventory

  constructor() {
    this.retrieve()
    if (!this.id) {
      this.id = uuid()
      this.inventory = new Inventory(this.id)
      this.persist()
    }
  }


  key: string = 'player'

  persist() {
    Persistor.persist(this.key, {
      id: this.id
    })
    this.inventory.persist()
  }

  retrieve() {
    const data = Persistor.retrieve(this.key)
    if (!data) return
    this.id = data.id
    this.inventory = new Inventory(this.id)
    this.inventory.retrieve()
  }
}