import { ChoiceSet, CoinFlip, Gender } from "../src/ChoiceSet"

describe("Builder test", () => {
  it("ChoiceSet is a constructor", () => {
    const choiceSet = ChoiceSet()
    expect(choiceSet.type).toBe("ChoiceSet")
  })
})

describe("Density test", () => {
  it("Retrieve an uniform density for all possible outcomes", () => {
    const genders = ChoiceSet("male", "female")
    expect(genders.density("male")).toEqual(1 / 2)
    expect(genders.density("female")).toEqual(1 / 2)
    expect(genders.density("other")).toEqual(0)
  })

  it("Throw an error if the list of outcomes is empty", () => {
    const emptyChoiceSet = ChoiceSet()
    expect(() => emptyChoiceSet.density("whatever")).toThrow()
  })
})

describe("Density of set test", () => {
  it("Retrieve an uniform density for a subset of all possible outcomes", () => {
    const colors = ChoiceSet("blue", "red", "green", "yellow", "orange")
    expect(colors.density("blue", "red")).toEqual(2 / 5)
    expect(colors.density()).toEqual(0)
  })
})

describe("CoinFlip", () => {
  it("Has an outcome of head/tails", () => {
    expect(CoinFlip().outcomes()).toContain("head")
    expect(CoinFlip().outcomes()).toContain("tails")
  })
})

describe("Gender", () => {
  it("Has an outcome of male/female", () => {
    expect(Gender().outcomes()).toContain("male")
    expect(Gender().outcomes()).toContain("female")
  })
})
