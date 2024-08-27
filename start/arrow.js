const user = {
    username : "ashut",
    pricr : 999,

    welcomeMessage: function(){ // this. means username have this context / scope 
         console.log(`${this.username}, welcome to website`);
          console.log(this) 
        }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)  // {} if acessed alone

// function chai(){
//     let username = " ashutosh"
//     console.log(this);
//     // this operator should be defined in username
// }
// chai(); // so many value 


// const chai = () => {
//     let username = " ashutosh"
//     console.log(this); // will also give {}
   
// }
// chai()



//ARROW function

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// impilicit return 
//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) =>  ({username: "hetes")} // can't return object like this

console.log(addTwo(3,4))