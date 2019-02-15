import { Univers } from "./types/Univers"
import { fromPairs, map, compose, tap } from "lodash/fp"
import { arrayParametersToArray } from "./utils"

export type ChoiceSetFunction = (...options: string[]) => Univers<string>

export const ChoiceSet: ChoiceSetFunction = compose(
  fromPairs,
  map(o => [o, 1]),
  arrayParametersToArray
)

export const CoinFlip = () => ChoiceSet("head", "tails")
export const Genders = () => ChoiceSet("male", "female")
