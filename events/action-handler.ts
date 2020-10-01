import { Action } from "."
import { search } from './search'
import { GameTime } from "time"
import { Player } from "Player"


export class ActionHandler {

  availibleActions: Action[] = []


  initialActions: Action[]
  

  context = {
    time: new GameTime(),
    player: new Player(),
    data: {}
  }

  getInitialActions() : Action[] {
    if (!this.initialActions) {

      this.initialActions = [
        {
          description: 'Search',
          act: search
        }
      ]
    }
    return this.initialActions
  }
  
  setActions(actions?: Action[]) {
    if (actions) {
      this.availibleActions = actions
    } else {
      this.availibleActions = this.getInitialActions()
    }
  }

  act(actionIndex: number) : string {
    const output = []
    

    const actionRef = this.availibleActions[actionIndex]

    const manifest = actionRef.act(this.context)()

    output.push(`${manifest.result}`)

    this.setActions(manifest.reactions)
  

    return output.join(' ')
  }
}