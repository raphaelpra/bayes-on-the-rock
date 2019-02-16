import { Event } from "../types/Event";
import { filter as filterLodash } from "lodash/fp";

export type EventFilterType<T> = (e: T) => boolean

export const filter = <T>(f: EventFilterType<T>) => filterLodash((e: Event<T>) => f(e.value))