import { Univers } from "./types/Univers"
import { fromPairs, map, compose, tap } from "ramda"
import { arrayParametersToArray } from "./utils"

export type ChoiceSetType = (...options: string[]) => Univers

export const ChoiceSet: ChoiceSetType = compose(
  fromPairs,
  map(o => [o, 1]),
  arrayParametersToArray
)

export const CoinFlip = () => ChoiceSet("head", "tails")
export const Genders = () => ChoiceSet("male", "female")
