import { Dice } from "../../src/ChoiceSet"
import { filter } from "../../src/fp/filter"

describe("filter test", () => {
  it("Filter all possible outcomes", () => {
    const dice = Dice(6)

    const onlyEven = (i: number) => i % 2 === 0

    const filteredDice = filter(onlyEven)(dice)
    expect(filteredDice).toEqual([
      { value: 2, weight: 1 }, 
      { value: 4, weight: 1 }, 
      { value: 6, weight: 1 }, 
    ])
  })
})