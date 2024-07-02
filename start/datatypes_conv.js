let score = "33abs"
let score1 = null

console.log(typeof score);
console.log(typeof (score))

let valueNumber = Number(score) // score conv. to number
console.log(typeof(valueNumber)) // number

console.log(valueNumber); // not a number 


let valueNumber1= Number(score1)
console.log(valueNumber1 )

//Number(variable)

//"33" => 33
//"33abs" => NaN
// true = 1 false = 0

let isLoggedIn =1 
let booleanloggedIn = Boolean(isLoggedIn)
console.log(booleanloggedIn)

// 1 -> true && 0 -> false

// (empty string)  "" -> false "as" -> true


let someNum = 34
let stringNum = String(someNum)
console.log(stringNum)
console.log(typeof(stringNum))