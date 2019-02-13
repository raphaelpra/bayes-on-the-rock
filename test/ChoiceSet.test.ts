import { ChoiceSet } from "../src/ChoiceSet"

/**
 * Dummy test
 */
describe("Builder test", () => {
  it("ChoiceSet is instantiable", () => {
    expect(new ChoiceSet()).toBeInstanceOf(ChoiceSet)
  })
  
  it("ChoiceSet is instantiable with choices", () => {
    expect(new ChoiceSet("male", "female")).toBeInstanceOf(ChoiceSet)
  })
})

describe("Density test", () => {
  it("Retrieve an uniform density for all possible outcomes", () => {
    const genders = new ChoiceSet("male", "female")
    expect(genders.density("male")).toEqual(1/2)
    expect(genders.density("female")).toEqual(1/2)
    expect(genders.density("other")).toEqual(0)
  })
})

describe("Density of set test", () => {
  it("Retrieve an uniform density for a subset of all possible outcomes", () => {
    const colors = new ChoiceSet("blue", "red", "green", "yellow", "orange")
    expect(colors.density("blue", "red")).toEqual(2/5)
    expect(colors.density()).toEqual(0)
  })
})