// singleton (if made from constructor) object.create

// object literals
// object using key and value pair

const sym = Symbol("key1")
const User = {
name: "Ashutosh",
"full name" : "Ashutosh Patel" ,// can't acess by (.) operator
age : 19,
[sym ]: "mykey", // if making use of symbol in object
location : "UP",
email: "ashu@gmail.com",
isLOgged : false,

}     

// Acessing 

// 1> objectname.key == user.name
console.log(User.name)
// console.log(User["name"]) // another way of acess
// console.log(User["full name"]) // if key is in string
// console.log(User[sym]) // symbol printing
// console.log(User.email)
// User.email = "jfksfdefffff"
 //Object.freeze(User) // means no more changes to object
// console.log(User.email)
// User.email = "sdkjsffsldl"
// console.log(User.email) // will not do any thing
// console.log(User)


User.greeting = function(){
    console.log("hello user");
}
console.log(User.greeting); // reference of function is returned
//console.log(User.greeting());

User.greeting2 = function(){
    console.log(`hello user, ${this["full name"]}`);
}
console.log(User.greeting2());