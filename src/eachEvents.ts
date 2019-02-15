import { Univers, LeafUnivers } from "./types/Univers"
import { Event } from "./types/Event"
import { values, keys, flatten, map, concat, merge } from "ramda"
import { TreeNode } from "./types/Tree"

export const eachEvents = (univers: Univers): Event[] => {
  if (isLeafUnivers(univers)) {
    // @ts-ignore
    return keys<string>(univers)
  } else {
    // [[key1, Univers1], [key2, Univers2], ...]
    const kValues = keyValuesUnivers(univers)

    // [[key1, [{event1A}, {event1B}, ...], [key2, [{event2A}, {event2B}, ...]]
    // @ts-ignore
    const r = map(([k, u]: [string, Univers]) => [k, eachEvents(u)], kValues)

    console.log("r", r)
    // [[{key1: event1A}, {key: event1B}, ...], [{key2: event2A}, {key2: event2B}, ...]]
    const r2 = map(
      ([k, l]: [string, object[]]) => attachAttributeToEachObject(k, l),
      r
    )

    console.log("r2", r)
    // @ts-ignore
    return cartesian(...r2)

    // const vals = values(nodeUnivers)
    // const r = map((u) => eachEvents(u), vals)
    // const z = cartesianProduct(...r)
    // console.log(z)
    // const r: string[][] = map<[string, any][], string>(keyValues, ([k, v]: [string, Univers<Event>]) => eachEvents(v))
    // const result: string[] = compose<string[], any>(
    //   map(([k, v]) => eachEvents(v)),
    //   entries
    // )(univers)
  }
}

function isLeafUnivers(univers: Univers): univers is LeafUnivers {
  const v = values(univers)
  return v.length === 0 || typeof v[0] === "number"
}

export const attachAttributeToEachObject = (attr: string, objs: any[]) =>
  map((o: object) => ({ [attr]: o }), objs)

const keyValuesUnivers = (u: Univers): [string, Univers | number][] => {
  const kk = keys(u)

  // @ts-ignore
  return map<string, [string, Univers | number]>((k: string) => [k, u[k]], kk)
}

const cartesian = (a: any[], b: any[]) =>
  map(i => merge(i[0], i[1]), flatten(map(d => map(e => concat(d, e), b), a)))
// const cartesian = (a: any[], b: any[], ...c: any[][]) => (b ? cartesian(f(a, b), c) : a);
