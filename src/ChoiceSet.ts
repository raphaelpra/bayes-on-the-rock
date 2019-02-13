import { IOmega } from "./omega"
import { filter } from "lodash/fp"
import { isIn } from "./utils";

export const ChoiceSet = (...outcomes: string[]): IOmega<string> => (
  {
    type: "ChoiceSet",
    outcomes: () => outcomes,
    density: (...variables: string[]) => {
      if (outcomes.length === 0) {
        throw new Error("Impossible to define a density for an empty choiceset")
      }
      const count: number = filter(isIn(variables))(outcomes).length
      return count / outcomes.length
    }
  }
)

 export const CoinFlip = () => ChoiceSet("head", "tails")
 export const Gender = () => ChoiceSet("male", "female")

