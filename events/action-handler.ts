import { Action } from "."
import { search } from './search'


export class ActionHandler {

  availibleActions: Action[] = []


  initialActions: Action[]

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

    const manifest = actionRef.act()

    output.push(`${manifest.result}`)

    this.setActions(manifest.reactions)

    return output.join(' ')
  }
}