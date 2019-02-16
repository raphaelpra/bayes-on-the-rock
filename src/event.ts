import { Event } from "./types/Event"

export const eventValue = <T>(event: Event<T>): T => event.value
export const eventWeight = <T>(event: Event<T>): number => event.weight
