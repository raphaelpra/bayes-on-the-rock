import { ChoiceSet, CoinFlip, Genders } from "../src/ChoiceSet"
import { Univers } from "../src/types/Univers"

describe("ChoiceSet test", () => {
  it("Has equaly distributed outcomes", () => {
    const choiceSet = ChoiceSet("option1", "option2", "option3")
    expect(choiceSet).toEqual({ option1: 1, option2: 1, option3: 1 })
  })
})

describe("CoinFlip", () => {
  it("Has an outcome of head/tails", () => {
    const flip = CoinFlip()
    expect(flip).toEqual({ head: 1, tails: 1 })
  })
})

describe("Genders", () => {
  it("Has an outcome of male/female", () => {
    const genders = Genders()
    expect(genders).toEqual({ male: 1, female: 1 })
  })
})
