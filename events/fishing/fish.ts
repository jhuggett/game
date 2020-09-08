import { ActionManifest, search } from '..'
import { getRandomBool } from 'utils'

export const fish = () : ActionManifest => {
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