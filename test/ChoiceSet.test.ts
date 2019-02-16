import { ChoiceSet, CoinFlip, Genders, Dice } from "../src/ChoiceSet"

describe("ChoiceSet test", () => {
  it("Has equaly distributed outcomes", () => {
    const choiceSet = ChoiceSet("option1", "option2", "option3")
    expect(choiceSet).toEqual([
      { value: "option1", weight: 1 },
      { value: "option2", weight: 1 },
      { value: "option3", weight: 1 }
    ])
  })
})

describe("CoinFlip", () => {
  it("Has an outcome of head/tails", () => {
    const flip = CoinFlip()
    expect(flip).toEqual([
      { value: "head", weight: 1 },
      { value: "tails", weight: 1 }
    ])
  })
})

describe("Genders", () => {
  it("Has an outcome of male/female", () => {
    const genders = Genders()
    expect(genders).toEqual([
      { value: "male", weight: 1 },
      { value: "female", weight: 1 }
    ])
  })
})

describe("Dices", () => {
  it("Has an outcome of 1/2/3/4/5/6", () => {
    const dice = Dice(6)
    expect(dice).toEqual([
      { value: 1, weight: 1 },
      { value: 2, weight: 1 },
      { value: 3, weight: 1 },
      { value: 4, weight: 1 },
      { value: 5, weight: 1 },
      { value: 6, weight: 1 }
    ])
  })
})
