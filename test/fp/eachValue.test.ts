import { ChoiceSet } from "../../src/ChoiceSet"
import { eachValue } from "../../src/fp/eachValue"

describe("eachEvents test", () => {
  describe("for simple univers", () => {
    it("List all possible outcomes", () => {
      const univers = ChoiceSet("option1", "option2", "option3")

      expect(eachValue(univers)).toEqual(["option1", "option2", "option3"])
    })
  })
})

