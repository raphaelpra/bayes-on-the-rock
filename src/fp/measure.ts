import { Distribution } from "../types/Distribution"
import { pipe, map, sum, curry } from "lodash/fp"

export const measureUncurried = <T>(items: T[], d: Distribution<T>) =>
  pipe(
    map(d.measureOne),
    sum
  )(items)

export const measure = curry(measureUncurried)
