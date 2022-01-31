// Pass a function to another function

function printVariable(Variable) {
console.log(Variable)
}
function func(x) {
    console.log("before")
    x("Hello World")
    console.log("after")
}
func(printVariable)
printVariable 

// Callback

function sumCallback(a, b, callback){
    callback(a + b)
}

function handleSum(sum){
    console.log(sum)
}

sumCallback(1, 2, handleSum) 

//  Create a new function that takes two parameters.
// 1. Name
// 2. Callback that prints out what we pass to it (printVariable)
// Take name and "Hello" in the beginning of the name
// If I pass in "Sam" it will print "Hello Sam"

function printVariable1(variable1) {
    console.log(variable1)
}

function printName(name, callback){
    callback("Hello " + name)
}

printName("Sam", printVariable1)