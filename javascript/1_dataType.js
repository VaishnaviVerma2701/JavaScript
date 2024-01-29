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


let value = 3
let negValue = -value
console.log(negValue);

//  operation

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%3);

// let str1 = "hello"
// let  str2 = "vaishu"
// let str3 = str1+str2
// console.log(str3)

// console.log("1" + 2); // 12
// console.log(2 + "1"); // 21
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
 
// if string is first than string operation perform first than Number
// if number is first than number operation perform first than string

console.log(true) //true
console.log(+true) // 1
console.log(false) // false
console.log(+false) // 0
console.log(""); // empty
console.log(+""); //0


let counter = 100
counter++;
console.log(counter);