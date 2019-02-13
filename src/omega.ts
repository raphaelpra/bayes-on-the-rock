export interface IOmega<T = string> {
  outcomes: () => T[]
  density: (...variables: T[]) => number
}
