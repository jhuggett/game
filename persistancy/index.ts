

class PersistanceHandler {
  private keys: string[] = []

  persist(key: string, value: any) {
    if (!this.keys.includes(key)) this.keys.push(key)

    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }

  retrieve(key: string) : any {
    if (!this.keys.includes(key)) return null

    const json = localStorage.getItem(key)
    return JSON.parse(json)
  }

  remove(key: string) {
    this.keys = this.keys.filter(savedKey => savedKey != key)
    localStorage.removeItem(key)
  }
}

export const Persistor = new PersistanceHandler()