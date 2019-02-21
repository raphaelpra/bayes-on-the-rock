import { Distribution } from "../types/Distribution"

export const eachWeight = <T>(distribution: Distribution<T>): number[] =>
  distribution.all().map(distribution.measureOne)
