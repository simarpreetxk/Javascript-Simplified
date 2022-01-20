let a = true
let b = false

console.log(typeof a) //string (boolean)
console.log(typeof b) //string (boolean)

console.log(a && b) //false
console.log(b && a) //false
console.log(a && a) //true
console.log(b && b) //false

console.log(a || b) //true
console.log(b || a) //true
console.log(a || a) //true
console.log(b || b) //false

console.log(false && false || true) //true

//Exercise
let happy = true
let fun = false
console.log(happy && fun)
console.log(!happy)