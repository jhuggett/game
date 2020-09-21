import { ActionManifest, search, ActionContext } from '..'
import { getRandomBool } from 'utils'

export const fish = (context: ActionContext) => () : ActionManifest => {
  context.time.pushTime(
    {
      hours: 0,
      minutes: 30,
      seconds: 0
    }
  )


  let result = ''

  if (getRandomBool(.05)) {
    result = 'You somehow caught a fish, though you have nowhere to put it, so you release it back into the shimmering water.'
  } else {
    result = 'Though you see fishes in the water, you fail to catch any.'
  }



  return {
    result: result,
    reactions: [
      {
        description: 'Continue fishing',
        act: fish
      },
      {
        description: 'Go back to exploring',
        act: search
      }
    ]
  }
}