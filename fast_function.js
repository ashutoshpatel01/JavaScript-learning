// Immediately Invoked Function Expressions(IIFE)
// global scope ke pollution se problem hoti  
// to remove pollution of global scope we ise IFEE
// (function chai (){
//     console.log("connected")
// })();

// () function 
// and 2nd () immediate 

( function chai () {
    // named IIFEE
    console.log("connected 2");
})();

((name) => {
    console.log(`connecte  ${name}`);
})("ashutosh");