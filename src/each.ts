import { Event } from "./types/Event"
import { Univers } from "./types/Univers";
import { map } from "lodash/fp";


export const eachEvents = <T>(univers: Univers<T>): T[] => map<Event<T>, T>(valueSelector)(univers)

export const eachWeight = <T>(univers: Univers<T>): number[] => map(weightSelector)(univers)

export const valueSelector = <T>(event: Event<T>): T => event.value
export const weightSelector = <T>(event: Event<T>): number => event.weight
