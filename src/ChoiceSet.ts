import { Univers  } from "./types/Univers"
import { fromPairs, map, compose } from "lodash/fp"
import { arrayParametersToArray } from "./utils"

export type ChoiceSetType = (...options: string[]) => Univers<string>

// @ts-ignore
export const ChoiceSet: ChoiceSetType = compose(
  map((s: string) => ({ value: s, weight: 1})),
  arrayParametersToArray,
)

export const CoinFlip = () => ChoiceSet("head", "tails")
export const Genders = () => ChoiceSet("male", "female")
