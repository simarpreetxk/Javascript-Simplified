// Arrow Function Sum

let sumArrow = (a,b) => {
    return a+b
}
console.log(sumArrow(1,2))

//Arrow Function Name

let printNameArrow = (name) => {
    return name
}
console.log(printNameArrow("Sam"))
//printNameArrow = printName

// Arrow Function Sum 2.0

let sumArrow1 = (c, d)=> c + d //Automatically Returns
console.log(sumArrow1(3,5))

// Print "Hello" + name using Arrow Function

let printName1 = (name1) => {
    return "Hello " + name1
}
console.log(printName1("Sam"))

//Empty Arrow Function

function hi() {
    console.log("hi")
}

let hiArrow = () => {
    console.log("Hi")
}
hiArrow()

//Passing Function

function func(x, callback) {
  callback(x)
}

func(10, variable => console.log(variable))