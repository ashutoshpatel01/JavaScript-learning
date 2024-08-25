//
// function sayname(){
//   console.log("ashutosh")
// }
// sayname() 
//sayname --> it is only reference

// function Add(num1, num2){
//     console.log(num1 + num2);
// }

// function Add(num1, num2){
//     const result = num1 + num2;
//     return result;
// }
function Add(num1, num2){
     return num1 + num2;
}


 const result = Add(3,4) //7
// Add(3, "4") //34
// Add(3, "a") // 3a
console.log(result)


function logmessage(username){
    if(username === undefined){
        console.log("Please enter user name")
         return;
    }
    return `${username} just logged in`;
}
//console.log(logmessage("ashutosh")) // if not argiment passed then Undefined
function calculateCartPrice(...num1){ // here ... is a rest opertor
     return num1
}

console.log(calculateCartPrice(200,330,555)) // will print in array

// objecta and arrays can used as parameter in function
