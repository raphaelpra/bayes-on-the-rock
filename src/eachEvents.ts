import { Univers } from "./types/Univers"
import { Event, StringEvent } from "./types/Event"

export function eachEvents<T extends Event>(univers: Univers<T>): T[] {
  return []
}
