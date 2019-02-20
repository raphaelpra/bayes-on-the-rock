const { Genders } = require("../dist/lib/ChoiceSet")

console.log("A family has two children: Alex and Leslie.")
console.log("We don't know the gender of either kids.")
console.log()

// We define the random value of the gender of Alex
const alexGender = Genders()

// We define the random value of the gender of Leslie
const leslieGender = Genders()

// We define the random value of the combination of both children
const children = combine(alexGender, leslieGender)

console.log("It could be one of the following:")
// FIXME: print((alex, leslie) => `Alex: ${alex} / Leslie: ${leslie}`)(children)
console.log()

// We define the predicat that they are both males
const bothMale       = (alex, leslie) => alex === "male" && leslie === "male"

// FIXME: console.log("The probablity that they are both male is:" propability(bothMale, children))
console.log()

console.log("Howeber the uncle Bob told us that one of them is a male")
const atLeastOneMale = (alex, leslie) => alex === "male" || leslie === "male"

// FIXME: const withBobKnowledge = knowingThat(atLeastOneMale, children)
// FIXME: console.log("Therefore, we now know that the probablity that they are both male is:" propability(bothMale, withBobknowledge))
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
// const withNewKnowledge = children().pipe(
//   combine(alexBirthWeekDay),
//   combine(leslieBirthWeekDay),
//   knowingThat(sundayBoy)
// )
// FIXME: console.log("Therefore, we now know that the probablity that they are both male is:" propability(bothMale, withNewKnowledge))

console.log("Thanks Bob !")