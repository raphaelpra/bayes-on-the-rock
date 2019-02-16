import { Event } from "../types/Event";

export const product = <T, U>(events: [Event<T>, Event<U>]): Event<[T, U]> => (
  { value: [events[0].value, events[1].value], weight: independent(events[0], events[1]) }
)

const independent = <T, U>(e1: Event<T>, e2: Event<U>): number => e1.weight * e2.weight

