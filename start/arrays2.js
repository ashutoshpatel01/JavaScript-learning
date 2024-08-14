const marvel = ["adcd", "efgh", "ijkl"]
const dc = ["supdc", "flasdc", "batdc"]
marvel.push(dc); // here it taken array as one lelement 
  // [ 'adcd', 'efgh', 'ijkl', [ 'supdc', 'flasdc', 'batdc' ] ]
  //      0       1        2     3
console.log(marvel)
// const allhero = marvel.concat(dc) // return one array
// console.log(allhero)

const all_new_hero = [...marvel, ...dc] //spread operator
//console.log(all_new_hero)

const anthArr = [1,2,3,[4,5,6],7,[6,7[4,5]]]
const real = anthArr.flat(Infinity) //flat(depth)
//console.log(real) // [ 1, 2, 3, 4, 5, 6, 7, 6, undefined ]


console.log(Array.from("Ashutosh")) // convert this string to arrray
console.log(Array.apply({name: "ash"})) // we have define for whom i have to make array

let sc1 = 100;
let sc2 =200;
let sc3  = 300;

console.log(Array.of(sc1,sc2,sc3)); // to array