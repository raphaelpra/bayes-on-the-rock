const { Genders } = require("../dist/lib/ChoiceSet")
const { cartesian } = require("../dist/lib/fp/cartesian")
const { filter } = require("../dist/lib/fp/filter")

const kid1Genders = Genders()
const kid2Genders = Genders()

const all = cartesian([kid1Genders, kid2Genders])

console.log("We have two kids.")
console.log("Each one can be a male/female")

console.log("Number of possibilities:", all.length)

const with1Male = filter(([kid1, kid2]) => kid1 === "male" || kid2 === "male")(all)
const with2Male = filter(([kid1, kid2]) => kid1 === "male" && kid2 === "female")(all)

console.log("Number of possibilities with at least 1 boy:", with1Male.length)
console.log("Number of possibilities with at least 2 boys:", with2Male.length)

console.log("Probability of both boys, knowing that one is a boy:", (with2Male.length / with1Male.length))


