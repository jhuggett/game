import { ActionManifest, Find, followRoad, goFishing, Action, ActionContext } from "."

import { getRandomBool, getRandomItem, getRandomWeightedItem } from "utils"
import { Persistor } from "Persistancy"
import { coyoteBehindYou } from "./coyote"

export const search = (context: ActionContext) => () : ActionManifest => {
  context.time.pushTime(
    {
      hours: 2,
      minutes: 0,
      seconds: 0
    }
  )

  if (getRandomBool(0.1)) {
    return coyoteBehindYou(context)()
  }

  const roadsFound = Persistor.retrieve('roadsFound')?.total || 0

  const find: Find | null = getRandomBool(.25) && getRandomWeightedItem([
    {
      item: {
        findDiscription: roadsFound > 0 ? 'You have found another road.' : 'You find a road.',
        action: {
          description: 'Follow the road',
          act: followRoad
        }
      },
      weight: 1
    },
    {
      item: {
        findDiscription: 'You have found a river.',
        action: {
          description: 'Go fishing',
          act: goFishing
        }
      },
      weight: .25
    }
  ]) || null

  
  const reactions: Action[] = []
  if (find) reactions.push(find.action)
  reactions.push({
    description: `${find ? getRandomItem(['Search again', 'Keep searching', 'Keep exploring']) : 'Continue searching'}`,
    act: search
  })

  let searchResult: string[] = []
  if (getRandomBool(.75)) searchResult.push(getRandomWeightedItem([
    {
      item: `A ${getRandomItem(['lark', 'sparrow', 'hawk', 'eagle', 'crow', 'raven'])} flies overhead as you walk around.`,
      weight: 1
    },
    {
      item: `While looking around, you noticed 
      ${getRandomItem(['an odd', 'a different', 'a curious', 'an unusual'])} 
      ${getRandomItem(['tree', 'flower', 'bone', 'branch', 'twig'])}.`,
      weight: 2
    }
  ]))

  if (find) {
    searchResult.push(find.findDiscription)
  } else {
    searchResult.push('Your search yeilded nothing of real value.')
  }

  if (context.time.getCurrentHour() < 5 || context.time.getCurrentHour() > 18) {
    searchResult.push('It is dark, night is upon you.')
  }

  return {
    result: searchResult.join(' '),
    reactions: reactions
  }
}