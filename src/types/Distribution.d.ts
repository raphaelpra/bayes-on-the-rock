export interface Distribution<T> {
  all: () => T[]
  measureOne: (l: T) => number
}

export interface Variable<T> extends Distribution<T> {
  measure: (l: T[]) => number
  probability: (p: Predicat<T>) => number
  knowingThat: (p: Predicat<T>) => Distribution<T>
  print: (strftime?: string ) => Distribution<T>
  // independant: <U>(d2: Distribution<U>) => Distribution<[T, U]>
}

export type Predicat<T> = (t: T) => boolean

export type Operation = (d: Distribution<any>) => Distribution<any>