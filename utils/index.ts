export * from './random'
export * from './coordination'


export const range = (start: number, end: number) : Array<number> => {
  return [...Array(end).keys()].map( i => i + start)
}