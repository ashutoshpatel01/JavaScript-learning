//ARRAYS

const myArr = [1,4,7,3,2,8]; // resizeable and mixed of data structure
//console.log(myArr[3]) // indexing acess

// it make shallow copy same reference

// deep copy without refernce

const myArr2 = new Array(1,2,3,4);

// METHODS

// myArr.push(6);
// myArr.push(9);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(9) // pushed at end
// console.log(myArr); 
// myArr.shift() // delete from start
// console.log(myArr);
// console.log(myArr.includes(9)); // bool
// console.log(myArr.indexOf(3));

const near = myArr.join() // string 147328

// SLICE does not change original array
// and SPLICE changes origunal array
console.log(myArr)

console.log("A",myArr.slice(1,3) ) // print array from index 1 t0 2
const arr2 = myArr.splice(1,3);
console.log("B",myArr) // print those which is not includdedin splice index
console.log("c",arr2 ) // print spliced array  indexed from 1 to 3
