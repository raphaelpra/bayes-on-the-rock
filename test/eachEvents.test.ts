import { Univers } from "../src/types/Univers"
import { ChoiceSet, CoinFlip } from "../src/ChoiceSet"
import { eachEvents, attachAttributeToEachObject } from "../src/eachEvents"

describe("eachEvents test", () => {
  describe("for simple univers", () => {
    it("List all possible outcomes", () => {
      const univers = ChoiceSet("option1", "option2", "option3")

      expect(eachEvents(univers)).toEqual(["option1", "option2", "option3"])
    })
  })

  describe("for complexe univers", () => {
    it("List all possible outcomes", () => {
      const univers = {
        coin: CoinFlip(),
        option: ChoiceSet("option1", "option2", "option3")
      }

      expect(eachEvents(univers)).toEqual([
        { coin: "head", option: "option1" },
        { coin: "head", option: "option2" },
        { coin: "head", option: "option3" },
        { coin: "tails", option: "option1" },
        { coin: "tails", option: "option2" },
        { coin: "tails", option: "option3" }
      ])
    })
  })

  it("attachAttributeToEachObject", () => {
    const o = [{ a: "aa" }, { b: "bb" }, { c: "cc" }]
    expect(attachAttributeToEachObject("prefix", o)).toEqual([
      { prefix: { a: "aa" } },
      { prefix: { b: "bb" } },
      { prefix: { c: "cc" } }
    ])
  })
})
