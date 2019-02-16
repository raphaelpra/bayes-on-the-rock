import { Event } from "./types/Event"
import { keys, flatten, map, toPairs } from "ramda"
import { Univers, Weight } from "./types/Univers";
import mergeAll from "ramda/es/mergeAll";
import reduce from "ramda/es/reduce";

export const eachEvents = (univers: Univers): Event[] => {
  // [[key1, Univers1], [key2, Univers2], ...]
  const variables: [string, Weight][] = toPairs(univers)

  // [[key1, [{event1A}, {event1B}, ...], [key2, [{event2A}, {event2B}, ...]]
  const r = map(([k, u]: [string, Weight]) => [k, keys(u)], variables)

  // [[{key1: event1A}, {key: event1B}, ...], [{key2: event2A}, {key2: event2B}, ...]]
  const r2 = map(
    ([k, l]: [string, string[]]) => attachAttributeToEachObject(k, l),
    // @ts-ignore
    r
  )

  console.log("r2", r2)
  // @ts-ignore
  const r3 = product(...r2)
  console.log("r3", r3)
  return mergeAll(r3)
}


export const attachAttributeToEachObject = (attr: string, objs: string[]) =>
  map((o: string) => ({ [attr]: o }), objs)

