export * from './fish'

import { ActionManifest, search, fish } from '..'

export const goFishing = () : ActionManifest => {
  



  return {
    result: 'You don\'t have any fishing equipement. You stand before the water.',
    reactions: [
      {
        description: 'Try to catch a fish',
        act: fish
      },
      {
        description: 'Go back to exploring',
        act: search
      }
    ]
  }
}