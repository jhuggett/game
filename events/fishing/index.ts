export * from './fish'

import { ActionManifest, search, fish, ActionContext } from '..'

export const goFishing = (context: ActionContext) => () : ActionManifest => {
  context.time.pushTime(
    {
      hours: 0,
      minutes: 1,
      seconds: 0
    }
  )



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