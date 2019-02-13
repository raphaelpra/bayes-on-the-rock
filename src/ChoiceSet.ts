import { IOmega } from "./omega"
import { filter } from "lodash";

export class ChoiceSet implements IOmega<string> {
  outcomes: Set<string>

  constructor(...choices: string[]) {
    this.outcomes = new Set(choices)
  }

  outcomesList(): string[] {
    return Array.from(this.outcomes.values())
  } 

  density(...variables: string[]) {
    if (this.outcomes.size === 0) {
      throw new Error("Impossible to define a density for an empty choiceset")
    }
    const count: number = filter(this.outcomesList(), isIn(variables)).length
    return count / this.outcomes.size
  }
}

type Predicate<T> = (o: T) => boolean 

function isIn<T = string>(list: T[]): Predicate<T> {
  return (a: T) => list.includes(a)
} 