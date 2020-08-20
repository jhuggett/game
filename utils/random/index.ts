export const getRandomNumber = (min: number, max: number) : number => { // [min, max]
  return Math.floor(
      Math.random() * (max - min + 1)
  ) + min
}

export const getRandomBool = (chance: number = 0.5) : boolean => {
  return getRandomNumber(0, 100) / 100 <= chance ? true : false
}

export const getRandomItem = <T>(array: Array<T>) : T  => {
  return array[getRandomNumber(0, array.length - 1)]
}

export const shuffle = <T>(array: Array<T>) : Array<T> => {
  let oldArray = [...array]
  let newArray = []

  while(oldArray.length > 0) {
      if (oldArray.length == 1) {
          newArray.push(oldArray[0])
          oldArray.pop()
      } else {
          const nextValue = getRandomNumber(0, oldArray.length - 1)
          newArray.push(oldArray[nextValue])
          oldArray.splice(nextValue, 1)
      }
  }

  return newArray
}

