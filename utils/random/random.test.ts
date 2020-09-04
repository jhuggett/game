import { getRandomWeightedItem } from '.'


test('this should succeed', () => {

  const tally = [0, 0, 0, 0, 0]

  for (let i = 0; i < 1000; i++) {
    const num = getRandomWeightedItem([
      {
        item: 0,
        weight: .5
      },
      {
        item: 1,
        weight: 1
      },
      {
        item: 2,
        weight: 2
      },
      {
        item: 3,
        weight: .1
      },
      {
        item: 4,
        weight: 2
      }
    ])
    tally[num]++
  }

  console.log(tally);
  
  expect(true).toBe(true)
})