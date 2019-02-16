import { product } from "../../src/fp/product"

describe("Product test", () => {
  it("Combine 2 Events", () => {
    const event1 = { value: "toto", weight: 3 }
    const event2 = { value: "tata", weight: 4 }

    expect(product([event1, event2])).toEqual(
      { value: ["toto", "tata"], weight: 12 }, 
    )
  })

  xit("Combine 3 Events", () => {
    const event1 = { value: "toto", weight: 3 }
    const event2 = { value: "tata", weight: 4 }
    // const event3 = { value: "tutu", weight: 5 }

    expect(product([event1, event2])).toEqual(
      { value: ["toto", "tata", "tutu"], weight: 60 }, 
    )
  })
})