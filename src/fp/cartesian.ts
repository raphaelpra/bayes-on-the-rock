import { Univers } from "../types/Univers";
import { Event } from "../types/Event"; 
import { flatten, map, concat } from "lodash/fp";
import { product } from "./product";

export const cartesian = <T, U>(univers: [Univers<T>, Univers<U>]): Univers<[T, U]> => {
  return flatten(concat(map((a: Event<T>) => map((b: Event<U>) => product([a, b]), univers[1]), univers[0]), []))
}

