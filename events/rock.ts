import { ActionContext, ActionManifest } from ".";
import { search } from "./search";
import { Rock } from "Items/rock";


export const pickUpRock = (context: ActionContext) => () : ActionManifest => {

  const rock = new Rock()

  context.player.inventory.addItem(rock)

  return {
    result: 'You pocket the rock.',
    reactions: [
      {
        description: 'Continue searching',
        act: search
      }
    ]
  }
}