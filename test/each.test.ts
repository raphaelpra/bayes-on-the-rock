// import { Univers } from "../src/types/Univers"
import { ChoiceSet } from "../src/ChoiceSet"
import { eachEvents, eachWeight } from "../src/each"

describe("eachEvents test", () => {
  describe("for simple univers", () => {
    it("List all possible outcomes", () => {
      const univers = ChoiceSet("option1", "option2", "option3")

      expect(eachEvents(univers)).toEqual(["option1", "option2", "option3"])
    })
  })
})

describe("eachWeight test", () => {
  describe("for simple univers", () => {
    it("List all possible outcomes", () => {
      const univers = ChoiceSet("option1", "option2", "option3")

      expect(eachWeight(univers)).toEqual([1, 1, 1])
    })
  })
})