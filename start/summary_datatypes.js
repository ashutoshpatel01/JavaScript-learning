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

