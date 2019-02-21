import { measure } from "./fp/measure"
import { Distribution, Variable } from "./types/Distribution"

export const V = <T>(d: Distribution<T>): Variable<T> => ({
  all: d.all,
  measureOne: d.measureOne,
  measure: l => measure(l, d),
  probability: predicat => 0,
  knowingThat: p => d, // knowingThat(p, d),
  print: (strftime?: string) => {
    // print(strftime, d)
    console.log(strftime)
    return d
  }
})
