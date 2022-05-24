// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("divisibleByThree",() => {
//     const num1 = 15
//     // Expected output: "15 is divisible by three"
//     const num2 = 0
//     // Expected output: "0 is divisible by three"
//     const num3 = -7
//     // Expected output: "-7 is not divisible by three"
    
    // it ("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    //     expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
    //     expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
    //     expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
    // })  
 

//   ReferenceError: divisibleByThree is not defined.
//   Ran test and test failed correctly.

// b) Create the function that makes the test pass.

//Peusocode: Create a function that decides whether the numbers provided are divisible by three or not.
// if the number is divisilbe by three return divisible by three.
// else return number is not divisible by three.
// const divisibleByThree = (number) => {
//     if(number % 3 === 0){
//         return `${number} is divisible by three`
//     } else{
//         return `${number} is not divisible by three`
//     }
// }
// Received a pass result on second test run.

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// describe("wordsCapitalized",() => {
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"] 
//     const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
  
//  it("takes in an array of words and returns an array with all the words capitalized",() => {
//     expect(wordsCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//     expect(wordsCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
      
//     } )  
//  } )  


// a) Create a test with expect statements for each of the variables provided.

//Peusdocode: Will use describe to run other nested methods.
// it will will the methods nested within the code block.
// expect will test the function.

// describe("wordsCapitalized",() => {
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"] 
//     const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
  
//  it("takes in an array of words and returns an array with all the words capitalized",() => {
//     expect(wordsCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//     expect(wordsCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
      
//     } )  
//  } )  

//  // Initial test FAIL

// // b) Create the function that makes the test pass.
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Peusdocode: Take in an array of words and return an array with all words capitalized.
// Using the most common type of loop (for loop) will allow me to define the items.
// const wordsCapitalized = (array) => {
//     let newcapArray = []
//     for(let i=0; i<array.length; i++){
//     newcapArray.push(array[i][0].toUpperCase()+ array[i].substr(1))
// }
//     return newcapArray
// }
    
// Second test passed

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("firstVowel",() => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2

    it("takes in an array of words and returns an array with all the words capitalized",() => {
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)  
    } )
}   )
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//Initial test good fail: firstVowel is not defined

//Pseudocode:take in a string and logs the index of the first vowel.
//takes in a string and logs the index of the first vowel.
//declaring function firstVowel with parameter string.
// index is 0, which is the first place in the string
// tell the code how many times to loop using i<string.length to go one less than length.
// I received a lot of help. I didn't really understand the i<string.length, syntax, or concepts such as (arrays, loops) however I am continuing to seek tutoring after class.

// b) Create the function that makes the test pass.

const firstVowel = (string) => {
    for(let i=0; i<string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
           return i        
           } 
      }
   
   }