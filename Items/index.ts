export * from './rock'
export * from './item-directory'

interface ItemContent {
  link: string
  name: string
}


export interface Item extends ItemContent {
  [x: string]: any


  getImportantData: () => ItemContent
}