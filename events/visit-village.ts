import { ActionManifest, search, ActionContext } from '.'
import { Persistor } from '../Persistancy'

export const visitVillage = (context: ActionContext) => () : ActionManifest => {
  context.time.pushTime(
    {
      hours: 1,
      minutes: 0,
      seconds: 0
    }
  )


  let villageVisits = Persistor.retrieve('villageVisits')
  
  if (!villageVisits) {
    villageVisits = {
      total: 1
    }
    Persistor.persist('villageVisits', villageVisits)
  } else {
    villageVisits.total++
    Persistor.persist('villageVisits', villageVisits)
  }
  


  return {
    result: `The village is deserted. Anything of value has already been taken.${villageVisits.total == 3 ? ' Where has everyone gone?' : ''}`,
    reactions: [
      {
        description: 'Continue exploring',
        act: search
      }
    ]
  }
}