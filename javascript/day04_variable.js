const accId = 1234
let accEmail= "vaishnaviverma2701@gmail.com"
var accPassword = "12345"
accCity = "raipur"
 let accState; // it is show the undefind

//accId = 2 // not allow because const not modify
accEmail = "vaishnavi@gmail.com"
accPassword = "7644"
accCity = "bhilai"

console.table([accId,accEmail,accPassword,accCity,accState]);

/*
prefer not use var
because issue is block scope and functional scope

*/


// day5_data-type ans Emca

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


