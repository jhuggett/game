import { ActionManifest, Find, followRoad } from "."

import { getRandomBool, getRandomItem } from "utils"

export const search = () : ActionManifest => {

  const finds: Find[] = getRandomBool(.5) && [getRandomItem([
    {
      findDiscription: 'You\'ve found a road.',
      action: {
        description: 'Follow the road',
        act: followRoad
      }
    }
  ])] || []
  
  return {
    result: `
      You saw a ${getRandomItem(['bird', 'tree', 'frog', 'rock', 'pond'])}. ${finds.map(find => find.findDiscription).join(' ')}
    `,
    reactions: [
      ...finds.map(find => find.action),
      {
        description: `${finds.length == 0 ? 'Search again' : 'Continue searching'}`,
        act: search
      }
    ]
  }
}