import { ActionContext, ActionManifest } from "."
import { search } from "./search"


const restTillMorning = (context: ActionContext) => () : ActionManifest => {

  context.time.pushTill(8)


  return {
    result: 'You rest until morning.',
    reactions: [
      {
        description: "Break camp",
        act: breakCamp
      }
    ]
  }
}

const breakCamp = (context: ActionContext) => () : ActionManifest => {

  return {
    result: 'You break camp.',
    reactions: [
      {
        description: "Begin searching",
        act: search
      }
    ]
  }
}

export const camp = (context: ActionContext) => () : ActionManifest => {

  return {
    result: 'You set up camp',
    reactions: [
      {
        description: "Rest until morning",
        act: restTillMorning
      }, 
      {
        description: "Break camp",
        act: breakCamp
      }
    ]
  }
}