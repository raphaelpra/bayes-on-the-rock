import { IOmega } from "./omega"
import { filter } from "lodash/fp"

const ChoiceSett = (...choices: string[]) => ({})

export class ChoiceSet implements IOmega<string> {
  private _outcomes: string[]

  constructor(...choices: string[]) {
    this._outcomes = choices
  }

  outcomes() {
    return this._outcomes
  }

  density(...variables: string[]) {
    if (this._outcomes.length === 0) {
      throw new Error("Impossible to define a density for an empty choiceset")
    }
    const count: number = filter(isIn(variables))(this._outcomes).length
    return count / this._outcomes.length
  }
}

type Predicate<T> = (o: T) => boolean

function isIn<T = string>(list: T[]): Predicate<T> {
  return (a: T) => list.includes(a)
}
