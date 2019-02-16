import { Univers, Weight } from "./types/Univers"
import { fromPairs, map, compose } from "ramda"
import { arrayParametersToArray, logAndReturn } from "./utils"

export type ChoiceSetType = (...options: string[]) => Weight

// @ts-ignore
export const ChoiceSet: ChoiceSetType = compose(
  fromPairs,
  // @ts-ignore
  map<string, [string, number]>(o => [o, 1]),
  arrayParametersToArray,
)

export const CoinFlip = () => ChoiceSet("head", "tails")
export const Genders = () => ChoiceSet("male", "female")
