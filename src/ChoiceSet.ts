import { Univers } from "./types/Univers"
import { map, flowRight, times } from "lodash/fp"
import { arrayParametersToArray } from "./utils"

export type ChoiceSetType<T> = (...options: T[]) => Univers<T>

// @ts-ignore
export const ChoiceSet: ChoiceSetType = flowRight(
  map((s: string) => ({ value: s, weight: 1 })),
  arrayParametersToArray
)

export const CoinFlip: ChoiceSetType<string> = () => ChoiceSet("head", "tails")
export const Genders: ChoiceSetType<string> = () => ChoiceSet("male", "female")

export type DiceType = (n: number) => Univers<number>
export const Dice: DiceType = (n: number) =>
  ChoiceSet(...times((i: number) => i + 1, n))
