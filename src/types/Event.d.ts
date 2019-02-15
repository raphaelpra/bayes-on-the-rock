export type LeafValue = number | string

export type EventNode<T> = {
  [key: string]: T
}

export type StringEvent = EventNode<string>
export type NumberEvent = EventNode<number>

// export type FinalNode = StringEvent | NumberEvent

export type Event = LeafValue | { [key: string]: Event }
