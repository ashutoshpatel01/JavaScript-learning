// singleton objects

const tinder = new Object() // one way will print empty object
//const tinder = {} also empty object but not singleton

tinder.id = "123abc"
tinder.name = "scanny"
tinder.isLogged = false;
//console.log(tinder)

const regular = {
    email : "some@email.con",
    fullname:{
        udserfullname:{
            fist : "ashu", // as many nesting is possible
            last : "patel"
        }
    }
}
//console.log(regular.fullname.udserfullname.fist)//

 const obj1 = { 1: "a",2: "b",}
 const obj2 = {3: "c", 4: "d"}

 //const obj3 = {obj1, obj2} // will nest object
// to avoid nesting
const obj4 = Object.assign({}, obj1, obj2) // 1st parameter is optional and return a object
console.log(obj4)

const obj5 = {...obj1, ...obj2}
// console.log(obj5)

// when data come from database it will come as array of objects

// const users = {... ,
//     ...,
//     ...obj1,



// }
console.log(Object.keys(tinder)); // as array of keys

console.log(Object.values(tinder)); // as array of values
console.log(Object.entries(tinder));


console.log(tinder.hasOwnProperty('isLogged')) // true if it has that property