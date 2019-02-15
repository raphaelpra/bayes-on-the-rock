export type GenericEvent<T> = {
  [Key: string]: T
}

export type NumericalEvent = GenericEvent<number>
export type StringEvent = GenericEvent<number>
