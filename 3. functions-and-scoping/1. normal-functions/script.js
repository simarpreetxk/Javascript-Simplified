// Functions-  encapsulate the logic which we can use later in the code.

function sayHi() {
    console.log("hello")
}

sayHi() 

// Create a function  that takes no arguments and prints your name

function sayName () {
    console.log("Sam")
}
sayName()

// Add two numbers

function sum(a,b) {
    console.log(a+b)
}

let x = 5
let y = 4

sum(x,y)

// Create a function that takes one argument (a person's name) and print that out

function printName(name){
    console.log(name)
}

printName("Sam")

// Return

function sum(a,b) {
    return a + b
}

let s = sum(2,2)
let sum2 = sum(2,s)
console.log(sum2)

// Create a function one argument(name) it wiill return that name added to the endof the string "Hello"

function sayHi(name){
    return "Hello" + name
}
let result= sayHi(" Sam")
console.log(result)