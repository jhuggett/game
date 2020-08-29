import { getRandomBool, getRandomItem } from "utils"

export interface Action {
  content: string
  finished: string
}

export class ActionHandler {

  availibleActions: Action[] = []

  setActions() {
    this.availibleActions = this.getActions()
  }

  getActions() : Action[] {
    const newActions = []

    newActions.push(
      {
        content: 'Search',
        finished: 'You search the area, you find nothing of value.'
      }
    )

    if (getRandomBool(.25)) {
      newActions.push(
        getRandomItem([
          {
            content: 'Visit town',
            finished: 'You visit the town. It\'s a ghost town. You find nothing.'
          },
          {
            content: 'Follow road',
            finished: 'You follow the road. It leads nowhere in particular.'
          },
          {
            content: 'Visit quarry',
            finished: 'You inspect the quary. You find many great boulders of rock, but far to heavy to lift.'
          }
        ])
      )
    }

    return newActions
  }

  act(actionIndex: number) : string {
    const output = []

    output.push(`${this.availibleActions[actionIndex].finished}`)

    this.setActions()

    return output.join(' ')
  }
}