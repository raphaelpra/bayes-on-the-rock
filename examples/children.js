const { Genders } = require("../dist/lib/ChoiceSet")
const { cartesian } = require("../dist/lib/fp/cartesian")
const { filter } = require("../dist/lib/fp/filter")

console.log("A family has two children: Alex and Leslie.")
console.log("We don't know the gender of either kids.")
console.log()

// We define the random value of the gender of Alex
const alexGender = Genders()

// We define the random value of the gender of Leslie
const leslieGender = Genders()

// We define the random value of the combination of both children
const children = alexGender.combine(leslieGender)

console.log("It could be one of the following:")
// FIXME: children.print(alex => leslie => `Alex: ${alex} / Leslie: ${leslie}`)
console.log()

// We define the predicat that they are both males
const bothMale       = (alex, leslie) => alex === "male" && leslie === "male"

// FIXME: console.log("The probablity that they are both male is:" children.propability(bothMale))
console.log()

console.log("Howeber the uncle Bob told us that one of them is a male")
const atLeastOneMale = (alex, leslie) => alex === "male" || leslie === "male"

// FIXME: const withBobKnowledge = children.knowingThat(atLeastOneMale)
// FIXME: console.log("Therefore, we now know that the probablity that they are both male is:" withBobKnowledge.propability(bothMale))
console.log()

console.log("Bob adds:")
console.log(`Bob: "I remember, the boy is born on Sunday!"`)

// We define the random value of the gender of Alex
const alexBirthWeekDay = WeekDay()

// We define the random value of the gender of Leslie
const leslieBirthWeekDay = WeekDay()

// We define the predicat that they are the boy is born on Sunday
const sundayBoy = (alex, leslie, alexWeekDay, leslieWeekDay) => 
  (alex === "male" && alexWeekDay === "sunday") || (leslie === "male" && leslieWeekDay === "sunday")

// We define new knowledge
const withNewKnowledge = children().combine(alexBirthWeekDay).combine(leslieBirthWeekDay).knowingThat(sundayBoy)
// FIXME: console.log("Therefore, we now know that the probablity that they are both male is:" withNewKnowledge.propability(bothMale))

console.log("Thanks Bob !")