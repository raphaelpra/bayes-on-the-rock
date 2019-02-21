import { ChoiceSet } from "../../src/ChoiceSet"
import { eachWeight } from "../../src/fp/eachWeight"

describe("eachWeight test", () => {
  describe("for simple univers", () => {
    it("List all possible outcomes", () => {
      const cs = ChoiceSet("option1", "option2", "option3")
      expect(eachWeight(cs)).toEqual([1, 1, 1])
    })
  })
})
