import { tap } from "lodash/fp"

export const arrayParametersToArray = (...args: any) => args

export const logAndReturn = (prefix: string) =>
  tap((args: any) => console.log(prefix, args))
