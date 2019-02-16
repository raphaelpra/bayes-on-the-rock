import { ChoiceSet, CoinFlip, Genders } from "../src/ChoiceSet"

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
      { value: "tails", weight: 1 }, 
    ])

  })
})

describe("Genders", () => {
  it("Has an outcome of male/female", () => {
    const genders = Genders()
    expect(genders).toEqual([
      { value: "male", weight: 1 }, 
      { value: "female", weight: 1 }, 
    ])
  })
})
