// JS is Dynamical typed language



// PRIMITIVE

// 7 TYPES : String , Boolean, Number, Null ,Undefines, Symbol
  // Bigint


  // NON PRIMITIVE (Reference)

  // Array , Object , Function


  //SYMBOLS
  const id = Symbol("123") // return a symbol datatype
  const anotherId = Symbol("123")
  console.log(id == anotherId) ; // false as their return data type is different
    
  //OBJECTS
 let Obj = {
   name: "Ashutosh",
   age : 22
  }

  const myfunction = function(){
    console.log("hello World"); // tyoe of data types = "object Function"
  }



  // ---------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------



  //STACK AND MEMORY

// Stack(primitive datatype)  . Heap (Non- primitive)


let mynmae = "AShutosh patel"

let anotherName = mynmae

anotherName = "patel"

console.log(mynmae)
console.log(anotherName)


// heap (non - primitive)
let user1=  {
    email: 'SSKJ932',
    UPI: "2JKFJ98",

}
let user2 = user1; // here user2 reference user1

user2.UPI = "hhd23" // here thischange wil incur in user1 also they reference same memeory


console.log(user2.UPI) //hhd23
console.log(user1.UPI)  // hhd23



