const name = " ashu"
const repoCount = 12;
 console.log(` hello my name is ${name} is and my repoCount is ${repoCount}`)


 // declaration

 const gameName = new String("AShutoOSH")
 // IT WILL GOVE KRY VALUE PAIR DON'T CONSIDER ARRAY.

 console.log(gameName[0]); // VALUE AT KEY 0 IS "A".
//  console.log(gameName.__proto__)
//  console.log(gameName.length)
//  console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3)); //u
 //console.log(gameName.indexOf('U')); //3

 const newString = gameName.substring(0,5); //(0,1,2,3,4) value printed
 console.log(newString)

 const string2 = gameName.slice(-8,4); // -ve val print in reverse
 console.log(string2);

 // TRIM && REPLACE

 const spaceString = "     aman  ";
 console.log(spaceString)
 console.log(spaceString.trim()) // deletes white spaces(defined on white spaces)

 const url = "https://ashu.com/ashutosh.in";
 console.log(url.replace('ash', '-'))

 console.log(url.includes('12')) // bool output if includes

 console.log(gameName.split('ashu'))
 
