import { IOmega } from "./omega"

interface IComposite {
  [key: string]: string
}

interface ICompositeBuilder {
  [key: string]: IOmega
}

export function Composite<T extends ICompositeBuilder, U>(
  builder: T
): IOmega<U> {
  return {
    type: "Composite",
    outcomes: () => [],
    density: (...variables: U[]) => 0
  }
}
