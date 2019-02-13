
export interface IOmega<T = string> {
  outcomes: Set<T>
  density: (...variables: T[]) => number
}