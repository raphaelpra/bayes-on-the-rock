import { Event, EventNode, LeafValue } from "./Event"

export type Univers<T extends Event> = T extends string
  ? { [Key: string]: number }
  : T extends number
  ? { [Key: number]: number }
  : T extends EventNode<Event>
  ? { [Key in keyof T]: Univers<T[Key]> }
  : never

// Exmemple of univers usage
// interface Gender {
//   gender: "male" | "female"
// }
// const univers: IUnivers<Gender & Event> = { gender: { male: 1, female: 2 }}
