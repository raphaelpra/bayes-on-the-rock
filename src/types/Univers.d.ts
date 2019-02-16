export type Univers = {
  [Key: string]: Weight
}

export type Weight = {
  [variable: string]: number
}

// import { Event, EventNode, LeafValue } from "./Event"

// export type LeafUnivers = { [Key: string]: number }

// export type Univers<T extends Event> = T extends string
//   ? LeafUnivers
//   : T extends EventNode<Event>
//   ? { [Key in keyof T]: Univers<T[Key]> }
//   : never

// Exmemple of univers usage
// interface Gender {
//   gender: "male" | "female"
// }
// const univers: IUnivers<Gender & Event> = { gender: { male: 1, female: 2 }}
