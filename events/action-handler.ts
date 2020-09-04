import { Action } from "."
import { search } from './search'


export class ActionHandler {

  availibleActions: Action[] = []

  getInitialActions() {
    return [
      {
        description: 'Search',
        act: search
      }
    ]
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

    console.log(this.availibleActions);
    console.log(this.getInitialActions());
    
    

    const actionRef = this.availibleActions[actionIndex]

    console.log(actionRef);
    

    const manifest = actionRef.act()

    output.push(`${manifest.result}`)

    this.setActions(manifest.reactions)

    return output.join(' ')
  }
}