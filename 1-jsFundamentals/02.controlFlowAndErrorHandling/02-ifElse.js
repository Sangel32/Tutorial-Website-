// If Else Statements

let money = false 

if (money) {
    console.log("Starbucks")
} else{
    console.log("Make Coffee")
}

let weather = 75 

if (weather < 70) {
    console.log("Wear a jacket")
} else {
    console.log("No jacket necessary")
}

let myName = "Sebastian" 

if (myName){
 console.log("Hello, my name is", myName)
  console.log('Hello, my name is ' + myName )
  console.log("Hello, my name is ${myName}.")
} else{
    console.log("Hello, what is your name?")
}

let myName = "sebastiAn"
let str = 'SebAstian'
if (str[0] === str[0].toUpperCase()) {
  let firstLetter = str[0] + str.slice(1).toLowerCase()
  console.log(firstLetter)
} else {
  let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  console.log(otherLetters)
}
let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
console.log(newStr)


// Else If Statements

let weather = 40 

if (weather > 70) {
    console.log("Wear a t-shirt")
} else if (weather <= 70 && weather > 50) {
    console.log("Wear a ligh jacket")
} else {
    console.log("Stay inside")
}

let age =  30
let young = "Sorry, youre too young to do anything."
let vote = "Yay! you can vote!"
let drink = "Yay! you can drink!"
let rent = "Yay! you can rent a car!"

if (age >= 0 && age < 120) {
    console.log(rent, drink, vote)
} else if (age >=21) {
    console.log(drink,vote)
}  else if (age >=18){
    console.log(vote)
} else {
    console.log(young) } 
} else {
    console.log("Please pick a real age dummy")
}