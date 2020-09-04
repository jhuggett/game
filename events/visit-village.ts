import { ActionManifest, search } from '.'

export const visitVillage = () : ActionManifest => {

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