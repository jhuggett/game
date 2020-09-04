import { Find, visitVillage, search } from "."

import { getRandomBool, getRandomItem } from "utils"

export const followRoad = () => {
  const roadLedTo: Find | null = getRandomBool(.5) && getRandomItem([
    {
      findDiscription: 'The road led to a village.',
      action: {
        description: 'Visit the village',
        act: visitVillage
      }
    }
  ]) || null

  const reactions = []
  if (roadLedTo) reactions.push(roadLedTo.action)
  reactions.push({
    description: `${'Continue exploring'}`,
    act: search
  })

  return {
    result: `${roadLedTo?.findDiscription || 'There\'s nothing at the end of the road.'}`,
    reactions: reactions
  }
}