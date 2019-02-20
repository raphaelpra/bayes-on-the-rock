import { find, times, includes, sum, map } from "lodash/fp"
import { Variable, Distribution } from "./types/Distribution";

export type ChoiceSetVariable<T> = (...options: T[]) => Variable<T>

// @ts-ignore
export const ChoiceSet: ChoiceSetVariable = <T>(options: T[]) => V({
  all: () => options,
  measureOne: (o: T) => includes(o, options) ? 1 : 0
})

export type CoinFlipType = () => Variable<"head" | "tail">
export const CoinFlip: CoinFlipType = () => ChoiceSet("head", "tails")

export type GendersFlipType = () => Variable<"male" | "female">
export const GendersFlip: GendersFlipType = () => ChoiceSet("male", "female")

export type DiceType = (n: number) => Variable<number>
export const Dice: DiceType = (n) =>
  ChoiceSet(...times((i: number) => i + 1, n))
