import { Univers  } from "./types/Univers"
import { map, compose, times } from "lodash/fp"
import { arrayParametersToArray } from "./utils"

export type ChoiceSetType<T> = (...options: T[]) => Univers<T>

// @ts-ignore
export const ChoiceSet: ChoiceSetType = compose(
  map((s: string) => ({ value: s, weight: 1})),
  arrayParametersToArray,
)

export const CoinFlip = () => ChoiceSet("head", "tails")
export const Genders = () => ChoiceSet("male", "female")

export type DiceType = (n: number) => ChoiceSetType<number>
export const Dice: DiceType = (n: number) => ChoiceSet(...times((i: number) => i+1, n))
