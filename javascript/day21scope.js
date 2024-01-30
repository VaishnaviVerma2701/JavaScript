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