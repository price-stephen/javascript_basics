// Value 
let a = 8;
let b = 3;

let c = a
// // now c is equal to 8
a = b 
b = c

console.log(`The value of a is ${a}`)
console.log(`The value of b is ${b}`)



// Concantenation

// Write an alert that combines the message and the string together. 

const name = "Steve"
const message = "Hello there"
alert(message + " " + name)


// Challenge - Write out how many characters the user has left and remaining. 


const charactersUsed = prompt("Write whatever you want").length;
const charactersAllowed = 240;

const charactersRemaining = alert(`You have use ${charactersUsed} characters out of ${charactersAllowed}. You now have ${charactersAllowed - charactersUsed} remaining!`)

// SLICING AND EXTRACTING PARTS OF A STRING

const stringName = "Steve";
console.log(stringName.slice(0,1))


const tweet = prompt("Write a tweet")
console.log(tweet)
alert(tweet.slice(0,140))

// Changing Casing in Text

// let caseName = "Steve";
// caseName = caseName.toUpperCase()
// console.log(caseName)
// caseName = caseName.toLowerCase()
// console.log(caseName)

// *Coding Challenge* - Uppercase only the first name of the input.

// We have the input
let inputName = prompt("What is your name?")

// // We have the length
lengthOfInputName = inputName.length

// // Now let's save everything but the first letter. 
excludesFirstLetter = inputName.slice(1,lengthOfInputName).toLowerCase()

// // I am going to return the first letter of the name and string concatenate with the remain. 
let includesFirstLetter = inputName.slice(0,1).toUpperCase()

// // To bring these together we use bracket notation concatenation. 
let formattedName = alert(`Hi ${includesFirstLetter + excludesFirstLetter}`)

// Basic Arithmetic and the Modulo Operator in Javascript

// Modulo Operator %
let e = 9 % 6;
console.log(e) // the console will equal 3 because the remainder is 3. 

/* Math precedence - 
1. Multiplication
2. Divide
3. Add
4. Subtract

Operator Precedence will read from left to right. The action on the left will happen first. 
Also to give the computer program a sign, whatever is in (whatever is in here) will operate first.
*/

let multiplyFirst = 3 + 5 * 2 // the multiplication will happen first then the addition. 
// console.log("Multiplication happens first answer is = " + multiplyFirst)
let addFirst = (3 + 5) * 2
console.log("Addition happens first because of parantheses (3 + 5) now the equation is 8 times 2 and the answer should be 16 let's check; yup = " + addFirst)


// Dog Age to Human Age Formula 

// humanAge = (dogAge - 2) * 4 + 21

let dogAge = prompt("How old is your dog?")

let humanAge = ((dogAge -2 ) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.")


// Increment Expression
 let x = 5;
 x = x + 1;
//  x++ this increments 
//  this can also be written x++

// let x = 5;
// let y = 3;
// // x = x + y; this is written the same way
// x += y;
// console.log(x)
 
/* you also have:

+=
-=
*=
/+

these are all incrementors/decrementors*/

// let x = 3
// let y = x + 1;
// console.log(y)
// y += 1;
// console.log(y)


// Functions Continued - How much time do you have left?

function youAreGoingToDie(age) {
    const numberOfYearsLeft = 29 - age;
    const numberOfDaysLeft = numberOfYearsLeft * 365;
    const numberOfWeeksLeft = numberOfYearsLeft * 52;
    const numberOfMonthsLeft = numberOfDaysLeft * 12;
    

    alert("You have " + numberOfYearsLeft + " years left, " + numberOfMonthsLeft + " of months left and " + numberOfDaysLeft + " number of days left - if you were to live to 90.")
}

youAreGoingToDie(28)

// --------- //
// A bottle of milk is equal to $2.00.

function buyMilk(money) {
     const cost = 3
     const bottlesYouCanBuy = math.floor(money / cost)
     console.log(bottlesYouCanBuy)
}

// Buy Milk Example start

function getMilk(money, costPerBottle) {
     console.log("buy " + calcBottles(money, 1.5) + " bottles of milk")
     return calcChange(money, costPerBottle)
}

 function calcBottles(startingMoney, costPerBottle) {
    const bottlesYouCanBuy = Math.floor(startingMoney /costPerBottle)
    return bottlesYouCanBuy
}

function calcChange(startingAmount, costPerBottle) {
    const change = startingAmount % costPerBottle;
    return change 
}

console.log("Hello master, here is your " + getMilk(10, 3) + " of change")
