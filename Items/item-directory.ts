import { Item, Rock } from '.'
import { Mushroom } from './mushroom'

export interface DirectoryLevel {
  classification: string
  subDirectories?: DirectoryLevel[]
  createItem?(data: any) : Item
}

const itemDirectory: DirectoryLevel[] = [
  {
    classification: 'rock',
    createItem: (data) => new Rock(data)
  },
  {
    classification: 'organic',
    subDirectories: [
      {
        classification: 'mushroom',
        createItem: (data) => new Mushroom(data)
      }
    ]
  }
]

const getDirectory = (classification: string, directories: DirectoryLevel[]) : DirectoryLevel => {
  return directories.filter(directory => directory.classification === classification)[0] 
}

export const traverseItemDirectory = (link: string[]) : DirectoryLevel => {
  let currentDirectory = null
  link.forEach((classification) => {
    if (!currentDirectory) {
      currentDirectory = getDirectory(classification, itemDirectory)
    } else if (currentDirectory.subDirectories) {
        currentDirectory = getDirectory(classification, currentDirectory.subDirectories)
    }
  })

  return currentDirectory
}