const score = 11;
console.log(score)

const balance = new Number(100);
console.log(balance)

console.log(balance.toString.length); // length of 100
console.log(balance.toFixed(2)); // upto what precision value

const num1 = 23.09403
console.log(num1.toPrecision(2)); // -.23 and pr(3) ->23.1

const hundred = 10000000;
console.log(hundred.toLocaleString('en-IN')); // in indian counting system

// we can get max and min value usin g max and min methods

//MATHS ->OBJECT AS PATH

// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.56)); // 4
// // also have ceil and have floor value as in math

// console.log(Math.min(4,3,5,4));// min value
// console.log(Math.max(4,3,5,4));// max value

console.log(Math.random()); // always print no. b/w 0 & 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1)) + min); // wil print value always b/w 10 & 20 


