export * from './action-handler'
export * from './search'
export * from './follow-road'
export * from './visit-village'
export * from './fishing'

import { GameTime } from '../time'
import { Player } from 'Player'

export interface Action {
  description: string
  act: (context: ActionContext) => () => ActionManifest
}

export interface Find {
  action: Action
  findDiscription: string
}

export interface ActionManifest {
  result: string
  reactions: Action[]
}

export interface ActionContextualData {
  [x: string] : any // this is a index signature to emulate dictionary-like behaviour
}

export interface ActionContext {
  time: GameTime
  player: Player

  data: ActionContextualData
}

// Action example:

// const example = (context: ActionContext) => () : ActionManifest => {

//   return {
//     result: '',
//     reactions: [

//     ]
//   }
// }