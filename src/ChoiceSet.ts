import { IOmega } from "./omega"
import { filter } from "lodash";

export class ChoiceSet implements IOmega<string> {
  outcomes: string[]

  constructor(...choices: string[]) {
    this.outcomes = choices
  }

  density(...variables: string[]) {
    if (this.outcomes.length === 0) {
      throw new Error("Impossible to define a density for an empty choiceset")
    }
    const count: number = filter(this.outcomes, isIn(variables)).length
    return count / this.outcomes.length
  }
}

type Predicate<T> = (o: T) => boolean 

function isIn<T = string>(list: T[]): Predicate<T> {
  return (a: T) => list.includes(a)
} 