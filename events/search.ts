import { ActionManifest, Find, followRoad, Action } from "."

import { getRandomBool, getRandomItem, getRandomWeightedItem } from "utils"

export const search = () : ActionManifest => {

  const find: Find | null = getRandomBool(.25) && getRandomWeightedItem([
    {
      item: {
        findDiscription: 'You find a road.',
        action: {
          description: 'Follow the road',
          act: followRoad
        }
      },
      weight: 1
    }
  ]) || null

  
  const reactions: Action[] = []
  if (find) reactions.push(find.action)
  reactions.push({
    description: `${find ? 'Search again' : 'Continue searching'}`,
    act: search
  })

  return {
    result: `
      ${find ? find.findDiscription : 'You search around and find nothing.'}
    `,
    reactions: reactions
  }
}