export interface IOmega<T = string> {
  type: string
  outcomes: () => T[]
  density: (...variables: T[]) => number
}
