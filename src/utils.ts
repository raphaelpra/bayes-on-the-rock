import { tap } from "lodash/fp"

type Predicate<T> = (o: T) => boolean

export function isIn<T = string>(list: T[]): Predicate<T> {
  return (a: T) => list.includes(a)
}

export const arrayParametersToArray = (...args: any) => args
export const logAndReturn = (prefix: string) =>
  tap((args: any) => console.log(prefix, args))
