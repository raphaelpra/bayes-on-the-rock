import { Event } from "../types/Event"
import { Univers } from "../types/Univers";
import { map } from "lodash/fp";
import { eventValue } from "../event";


export const eachValue = <T>(univers: Univers<T>): T[] => map<Event<T>, T>(eventValue)(univers)


