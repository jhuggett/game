export * from './action-handler'
export * from './search'
export * from './follow-road'
export * from './visit-village'


export interface Action {
  description: string
  act: () => ActionManifest
}

export interface Find {
  action: Action
  findDiscription: string
}

export interface ActionManifest {
  result: string
  reactions: Action[]
}