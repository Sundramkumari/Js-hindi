const name="sundram"
const repoCount=50

//console.log(name + repoCount + " Value");

//String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String('satyam-shivamsundram')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// const newString=gameName.substring(0, 4)
// console.log(newString)

const anotherString=gameName.slice(-20, 9)
console.log(anotherString);

const newStringOne="  Anand   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url="https://skp.com/skp%20shukla"
console.log(url.replace('%20', '_'))

console.log(url.includes('skp'))

console.log(gameName.split('-'))