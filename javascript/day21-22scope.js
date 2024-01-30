 //   day 20 global and local scope

//  let a = 10
//  const b = 20
//  var c = 30
//  console.table([a,b,c]);

//note => var is globle and local anytype access any were and var is changeble anywere
// if let and const is globle than access anywere atherwise not

 var c=50
 let b=28

if(true){
    let a =10
    const b = 20
    var c = 30
    console.log("inner value if b=",b); // print 20
}
//console.log(a); // show the error because a is local
console.log(b);//  print 28 becase it is globle 
console.log(c); // print 30 because var is changeble 

// within the block scope is called  block scope
//outside of scope is  block  called  globle scope


//      Day 22 scope level

// function one variable is globle variable of function two
   function one() {
    const username ="seeta"

    function two() {
        const website="youtube"
        console.log(username); 
    }
    //console.log(website); //error , website is local variable
    two() // execution of function two
   }
   one() //execution of function one , print seeta

   if(true){
    const username ="nisha"
    if(username === "nisha"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); // show error local variable
   }
   //console.log(username); // error because local variable and  inside of 
   
   // ++++++++ interasting ++++++

   function addone(num) {
    return num +1
   }
   addone(5) // only return not print any value

   // also call expression and function
   const addtwo = function(num){
    return num + 2
   }
   addtwo(5)  // only return not print any value

console.log( "value of addone = ",addone(5)) // does not show error because direct execute the function
   function addone(num) {
    return num +1
   }

   console.log(addtwo1(5)) // show error because we store the function n variable
   const addtwo1 = function(num){
    return num + 2
   }
   
 