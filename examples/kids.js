const { Genders } = require("../dist/lib/ChoiceSet")
const { cartesian } = require("../dist/lib/fp/cartesian")
const { filter } = require("../dist/lib/fp/filter")

const kid1Genders = Genders()
const kid2Genders = Genders()

const all = cartesian([kid1Genders, kid2Genders])

console.log("We have two kids.")
console.log("Each one can be a male/female")

console.log("Number of possibilities:", all.length)

const with1Male = filter(([k1, k2]) => (k1 === "male") || (k2 === "male"))
console.log("Number of possibilities with at least 1 boy:", with1Male.length)


