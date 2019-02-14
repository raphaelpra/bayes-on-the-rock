import { Event, EventNode, EventFinalNode } from "./Event"

export type Univers<T extends Event> = T extends (EventFinalNode)
  ? { [Key in keyof T]: { [Key2 in T[Key]]: number } }
  : T extends EventNode<Event>
  ? { [Key in keyof T]: Univers<T[Key]> }
  : never

// Exmemple of univers usage
// interface Gender {
//   gender: "male" | "female"
// }
// const univers: IUnivers<Gender & Event> = { gender: { male: 1, female: 2 }}
