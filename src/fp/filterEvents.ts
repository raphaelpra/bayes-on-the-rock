import { Event } from "../types/Event";
import { filter } from "lodash/fp";

export type EventFilterType<T> = (e: T) => boolean

export const filterEvents = <T>(f: EventFilterType<T>) => filter((e: Event<T>) => f(e.value))