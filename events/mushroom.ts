import { ActionContext, ActionManifest } from ".";
import { Mushroom } from "Items/mushroom";
import { search } from "./search";

const pickMushroom = (context: ActionContext) => () : ActionManifest => {
  
  const mushroom = context.data.mushroom
  context.data.mushroom = null

  context.player.inventory.addItem(mushroom)

  return {
    result: `You have picked the mushroom.`,
    reactions: [
      {
        description: 'Continue searching',
        act: search
      }
    ]
  }
}


export const foundMushroom = (context: ActionContext) => () : ActionManifest => {

  const mushroom = new Mushroom()

  context.data.mushroom = mushroom

  return {
    result: `You have found a ${mushroom.name.toLowerCase()}.`,
    reactions: [
      {
        description: `Pick the ${mushroom.name.toLowerCase()}`,
        act: pickMushroom
      },
      {
        description: 'Keep searching',
        act: search
      }
    ]
  }
} 