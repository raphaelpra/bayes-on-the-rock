import { ChoiceSet, CoinFlip, GendersFlip, Dice } from "../src/ChoiceSet"

describe("ChoiceSet test", () => {
  it("Has equaly distributed outcomes", () => {
    const choiceSet = ChoiceSet("option1", "option2", "option3")
    expect(choiceSet.all()).toEqual(["option1", "option2", "option3"])

    expect(choiceSet.measureOne("option1")).toEqual(1)
    expect(choiceSet.measureOne("other")).toEqual(0)
  })
})

describe("CoinFlip", () => {
  it("Has an outcome of head/tails", () => {
    const flip = CoinFlip()
    expect(flip.all()).toEqual(["head", "tails"])
    expect(flip.measureOne("head")).toEqual(1)
  })
})

describe("Genders", () => {
  it("Has an outcome of male/female", () => {
    const genders = GendersFlip()
    expect(genders.all()).toEqual(["male", "female"])
    expect(genders.measureOne("male")).toEqual(1)
  })
})

describe("Dices", () => {
  it("Has an outcome of 1/2/3/4/5/6", () => {
    const dice = Dice(6)
    expect(dice.all()).toEqual([1, 2, 3, 4, 5, 6])
    expect(dice.measureOne(1)).toEqual(1)
  })
})
