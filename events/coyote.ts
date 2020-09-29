import { ActionContext, ActionManifest } from ".";
import { search } from "./search";


const runAway = (context: ActionContext) => () : ActionManifest => {

  return {
    result: 'You run away. More coyotes swarm out from the forest. You have been eaten.',
    reactions: [

    ]
  }
}

const makeNoise = (context: ActionContext) => () : ActionManifest => {

  return {
    result: 'You yell out. The coyote runs away, all is well.',
    reactions: [
      {
        description: 'Continue your search',
        act: search
      }
    ]
  }
}

export const coyoteBehindYou = (context: ActionContext) => () : ActionManifest => {


  return {
    result: 'You notice a coyote behind you.',
    reactions: [
      {
        description: 'Make noise',
        act: makeNoise
      },
      {
        description: 'Run away',
        act: runAway
      }
    ]
  }
}

