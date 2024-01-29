// day5 datatype and ecma

"use strict"; // treat all js code as newer version 

// alert(3+3) // show the error because we are using nodejs ,not browser

console.log(3
    +
    3); // code readability should be high

   console.log("vaishu");
   
   let name = "vaishnavi"
   let age = 23
   let isLoggedId = false

//number => 2 to power 53
// bigint => if number is greater than 2 to power 53
//string => ""
//boolean => true/false
//null => standalone value
// undefined => value is not defined
 // symbol =>  for uniqueness

 //object

 console.log(typeof undefined);// undefined
 console.log(typeof null); //object 


 // day6_datatype conversion

 let num = "66"

// console.log(typeof num);
// console.log(typeof(num));

// let valueInNumber = Number(num)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

 /* "66"=>66
  "66ab" => nan
  true => 1
  false => 0
  null => 0
  undefind => undefind
 */

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*
1 => true; 0 => false;
"" => false
"vaisshu" => true
*/ 

let someNum = 33
let StringNum = String(someNum)
console.log(StringNum)
console.log( typeof StringNum)
