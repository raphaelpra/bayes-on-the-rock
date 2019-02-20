import { measure } from './fp/measure';
import { Distribution, Variable } from "./types/Distribution";

export const V = <T>(d: Distribution<T>): Variable<T> => ({
  measure: (l) => measure(l, d),
  knowingThat: (p) => d, // knowingThat(p, d),
  print: (strftime?: string ) => {
    // print(strftime, d)
    console.log(strftime)
    return d
  },
  // independant: (d2) => independant(d2, d)
  independant: (d2) => d2
})