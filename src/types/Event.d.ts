export type LeafValue = number | string

export type EventNode<T> = {
  [key: string]: T
}

export type EventFinalNode = EventNode<number> | EventNode<string>

export type Event = EventFinalNode | { [key: string]: Event }
// Exemple of complexe IEvent (all node must have same value type)
// const ex: IEvent = { toto: { one: "one", two: "two" }, titi: { one: 1, two: 2}, tutu: { titi: {}, toto: {}, tutu: {}} }
