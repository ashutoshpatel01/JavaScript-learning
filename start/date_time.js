// dates  -> object hai

let myDate = new Date()
//console.log(myDate.toString()); // very long string of date from 1940 in ms

//let createDate = new Date(2024, 0, 22)
//let createDate = new Date(2024, 0, 22, 5, 3,44) // with date tome in hrs , min , secs and ms
let createDate = new Date("01-14-2003")
//console.log(createDate.toString());

// time stamps

let myTime = Date.now()
// console.log(myTime)
// console.log(createDate.getTime()) // long string in mili second to cimpare with my time which also in long mili second strings

// to seconds
console.log(Math.florr(Date.now()/1000)); //in seconds

// to particulr data use methods 
//  .getmonth() , .getDay()