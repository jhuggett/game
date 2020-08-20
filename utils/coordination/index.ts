import { range } from '../'

export class Coor {
  constructor(public x: number, public y: number) {}

  sameAs(coor: Coor) : boolean {
    return this.x == coor.x && this.y == coor.y
  }
}

export enum Direction {
  north, south, east, west
}

export const getOppositeDirection = (direction: Direction) : Direction => {
  switch (direction) {
      case Direction.north: {
          return Direction.south
      }
      case Direction.south: {
          return Direction.north
      }
      case Direction.east: {
          return Direction.west
      }
      case Direction.west: {
          return Direction.east
      }
  }
}

export const getAdjacentCoors = (coor: Coor) : Array<Coor> => {
  return [
      new Coor(coor.x + 1, coor.y),
      new Coor(coor.x - 1, coor.y),
      new Coor(coor.x, coor.y + 1),
      new Coor(coor.x, coor.y - 1)
  ]
}

export const getDisplacedCoor = (coor: Coor, direction: Direction) : Coor => {
  switch (direction) {
      case Direction.north: {
          return new Coor(coor.x, coor.y - 1)
      }
      case Direction.south: {
          return new Coor(coor.x, coor.y + 1)
      }
      case Direction.east: {
          return new Coor(coor.x + 1, coor.y)
      }
      case Direction.west: {
          return new Coor(coor.x - 1, coor.y)
      } 
  }
}

export const getDirectionsOtherThan = (direction: Direction) : Array<Direction> => {
  return [
      Direction.north,
      Direction.south,
      Direction.east,
      Direction.west
  ].filter( val => val != direction )
}

export const ring = (distance: number, point: Coor) : Array<Coor> => {
  const xRange = range(point.x - distance, point.x + distance)
  const yRange = range(point.y - distance, point.y + distance)
  return [
      ...xRange.map( x => new Coor(x, point.y - 1)),
      ...xRange.map( x => new Coor(x, point.y + 1)),
      ...yRange.map( y => new Coor(point.x - 1, y)),
      ...yRange.map( y => new Coor(point.x + 1, y))
  ] 
}

export const filterCoors = (grid: {
      xMin: number,
      xMax: number, 
      yMin: number, 
      yMax: number
  }, coors: Array<Coor>) : Array<Coor> => {
  return coors.filter( coor => coor.x >= grid.xMin && 
      coor.x <= grid.xMax &&
      coor.y >= grid.yMin &&
      coor.y <= grid.yMax )
}

export const scan = (distance: number, point: Coor) : Array<Coor> => {
  const xRange = range(point.x - distance, point.x + distance)
  const yRange = range(point.y - distance, point.y + distance)
  return xRange.map( (x, i) => new Coor(x, yRange[i]) )
}