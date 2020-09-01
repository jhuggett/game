import { getRandomBool, getRandomItem, shuffle } from "utils"

export interface Action {
  description: string

  act: () => ActionManifest
}


interface Find {
  action: Action
  findDiscription: string
}

interface ActionManifest {
  result: string
  reactions: Action[]
}

const search = () : ActionManifest => {

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

const followRoad = () => {


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

const visitVillage = () : ActionManifest => {

  return {
    result: 'The village is deserted. Anything of value has already been taken.',
    reactions: [
      {
        description: 'Continue exploring',
        act: search
      }
    ]
  }
}

const initialActions: Action[] = [
  {
    description: 'Search',
    act: search
  }
]

export class ActionHandler {

  availibleActions: Action[] = []

  
  setActions(actions?: Action[]) {
    if (actions) {
      this.availibleActions = actions
    } else {
      this.availibleActions = initialActions
    }
  }

  getActions() : Action[] {
    const newActions = []

    newActions.push(
      {
        content: 'Search',
        act: () => {


          return {
            description: `
              You search around. You saw a ${getRandomItem(['bird', 'tree', 'frog', 'rock', 'pond'])}.
            `
          }
        }
      }
    )

    if (getRandomBool(.25)) {
      newActions.push(
        getRandomItem([
          {
            content: 'Visit town',
            act: () => {

              return {
                description: 'You visited the town.'
              }
            }
          },
          {
            content: 'Follow road',
            act: () => {
              
              return {
                description: 'You followed the road. Good job.'
              }
            }
          },
          {
            content: 'Visit quarry',
            act: () => {
              

              return {
                description: 'You visited the quarry. *cue applause*'
              }
            }
          }
        ])
      )
    }

    return newActions
  }

  act(actionIndex: number) : string {
    const output = []

    const actionRef = this.availibleActions[actionIndex]

    const manifest = actionRef.act()

    output.push(`${manifest.result}`)

    this.setActions(manifest.reactions)

    return output.join(' ')
  }
}