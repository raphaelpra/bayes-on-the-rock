import { cartesian } from "../../src/fp/cartesian"
import { Genders, ChoiceSet } from "../../src/ChoiceSet"

describe("Cartesian test", () => {
  it("Combine 2 events with 3 events", () => {
    const options = ChoiceSet("option1", "option2", "option3")
    const genders  = Genders()

    expect(cartesian([options, genders])).toEqual([
      { value: ["option1", "male"],   weight: 1 }, 
      { value: ["option1", "female"], weight: 1 }, 
      { value: ["option2", "male"],   weight: 1 }, 
      { value: ["option2", "female"], weight: 1 }, 
      { value: ["option3", "male"],   weight: 1 }, 
      { value: ["option3", "female"], weight: 1 }, 
    ])
  })
})