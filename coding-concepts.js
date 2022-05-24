// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: This will log "Bravo Cohort" with each index split into it's own string. I expect 10 strings.

// b) Verify and explain: I got this one correct because I had a similiar question on the last assessment and remembered that the space is a character.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log a string that reads "Hello LEARN Student"

// b) Verify and explain: After running the code it came back undefined because there was no return value, no return value no output


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: Probably not the best way to do this example and it wasn't taught but looking at var multBy2. I just muliplied each number in the array by 2 to log a new array of [8, 10, 12, 14, 16].

// b) Verify and explain: In the real world we would use the .map function to iterate an array and return a new array of the same length also the .filter function to satisfy the stated condition??.



// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: Since we are only looking for the odd number in this example, the only option is using modulo, any number with a remainder will be odd.

// b) Verify and explain: To stretch this example a little further, .filter would also be used since it returns a new stream containing values for which the lamda expression (new word) returns true.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: I got this one incorrect, made the mistake of thinking it was only the "J" that would return. This will log the string "JavaScript" since it sits in the [0] index of languages.

// b) Verify and explain: The index property is a read-only attribute. It contains the position on a regular expression match within a string.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: This will log [student: George, cohort:Bravo, year:2022]

// b) Verify and explain: Since we are creating a new object and setting values for any exsiting object, we would use a special fucntion (constructor) to create and initalize a class. Also it is called upon when an object is created using the "new" keyword.

