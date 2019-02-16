import { Univers } from "../types/Univers";
import { map } from "lodash/fp";
import { eventWeight } from "../event";

export const eachWeight = <T>(univers: Univers<T>): number[] => map(eventWeight)(univers);
