
// if(true){
// let a = 10
// const b = 20
// var c = 30 // c = 30 same things
// }
// console.log(c) // is accessed but it should

// let a = 300 // global

// if(true){
//     let a = 10
//     const b = 20
//     console.log(a) // local
//     }
//     console.log(a) // print global "a"

  
    
    // NESTED SCOPE

function one(){
    const username = "ashu"

    function two(){
        const web = " youtube"
        console.log(username)
    }
   // console.log(web)

    //two()
}  
one()  


// ------------------------------------ Interesting-----------------------
console.log(addone(5)) // not error

function addone(num){
    return num + 1;
}


addtwo(5) // but this will throw error
const addtwo = function(num){
    return num+2;
}


