import { Composite } from "../src/Composite"
import { Gender } from "../src/ChoiceSet"

describe("Builder test", () => {
  it("Composite is a constructor", () => {
    const omega = Composite({})
    expect(omega.type).toBe("Composite")
  })

  it("Throw an error if the object is empty", () => {
    const omega = Composite({})
    expect(() => omega.density({ key: "whatever"})).toThrow()
  })
})

describe("Simple composite object test", () => {
  it("Retrieve an uniform density for all possible outcomes", () => {
    const omega = Composite({ gender: Gender() })
    expect(omega.density({ gender: "male" })).toEqual(1 / 2)
    expect(omega.density({ gender: "female" })).toEqual(1 / 2)
    expect(omega.density({ gender: "other" })).toEqual(0)
  })
})

describe("Double composite object test", () => {
  it("Retrieve an uniform density for all possible outcomes", () => {
    const omega = Composite({ gender1: Gender(), gender2: Gender() })
    expect(omega.density({ gender1: "male",   gender2: "male" })).toEqual(1 / 4)
    expect(omega.density({ gender1: "male",   gender2: "female" })).toEqual(1 / 4)
    expect(omega.density({ gender1: "female", gender2: "male" })).toEqual(1 / 4)
    expect(omega.density({ gender1: "female", gender2: "female" })).toEqual(1 / 4)
    expect(omega.density({ gender1: "other",  gender2: "male" })).toEqual(0)
  })
})

