// primitive 
// 7 type : String, NUmber, boolearn , null, undefined , Symbol, BigInt

// Integer dataType
const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 243564687n

//Reference (Non primitive)
//Array, Objects, Function
const heros =["shaktiman","naagraj","doga"]
let myObj = {
    name: "sandhaya",
    age: "23",
}

const Myfunction = function(){
   console.log("hellow friend");
}
console.log(typeof Myfunction ); // function
console.log(typeof heros); //object
console.log(typeof id); // symbol

/*
null => object
undefined => undefined 
symbol => symbol
array => abject
function => function
object => object
String => String
Number => number
Boolean =>boolean
*/