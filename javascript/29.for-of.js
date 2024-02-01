 // +++ High Order Loop In Array

//  for-of loop  =>  for (const iterator of object) {
//  }

/* for-in loop => for (const key in object) {
   if (Object.hasOwnProperty.call(object, key)) {
     const element = object[key];
  }
  } */

//  ["","",""]
//  [{},{},{}] =>  for object
//   */


 console.log("------ for of loop ------");

 //  method 1:used for array
 const arr = [1, 2, 3, 4, 5]
  for (const num of arr) {
    console.log(num);
  }

 //  method 2: used string
  const greeting = "hello world"
  for(const greet of greeting ){
    console.log(` each char is ${greet}`)
  }

// method 3: used  Hashmap
  const map = new Map()
  map.set('in',"India")
  map.set('usa',"United States of America")
  map.set('fr',"France")
  map.set('in', "india")
 //console.log(map);

 for (const [key, value] of map) {
  console.log(key, ': ->',value);
 }

 //  for- of loop => does not used for object

 /*const myobj ={
  'game1':'criket',
  'game2':'footbool'
 }
 for (const [key, value] of myobj) {
  console.log(key, ': ->',value);
 }*/



 console.log("------ for in loop -------");

  // method 1:used for object
 const myObject ={
  js: "javascript",
  cpp:"c++",
  rp: "rubi"
 }
 for (const key in myObject) {
  console.log(`${key} shortcut for ${myObject[key]}`);
 }

 // method 2: used by array
 const programming =["js" ,"cpp","css","java","c","py"]
 for (const key in programming) {
    console.log(programming[key]);
 }


 // for-in loop =>  does not used for map
 const map1 = new Map()
  map.set('in',"India")
  map.set('usa',"United States of America")
  map.set('fr',"France")
  map.set('in', "india")

  for (const [key ,value] in map1) {
     console.log(key, ': ->',value); 
  }

   