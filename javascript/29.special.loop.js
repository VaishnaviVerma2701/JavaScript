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


 // for-of loop
 // used for array
 const arr = [1, 2, 3, 4, 5]
  for (const num of arr) {
    console.log(num);
  }
 // used string
  const greeting = "hello world"
  for(const greet of greeting ){
    console.log(` each char is ${greet}`)
  }


  //HashMaps
// for-of loop => used for map
  const map = new Map()
  map.set('in',"India")
  map.set('usa',"United States of America")
  map.set('fr',"France")
  map.set('in', "india")
 //console.log(map);

 for (const [key, value] of map) {
  //console.log(key, ': ->',value);
 }

 //  for- of loop => does not used for object

 /*const myobj ={
  'game1':'criket',
  'game2':'footbool'
 }
 for (const [key, value] of myobj) {
  console.log(key, ': ->',value);
 }*/

 //for-in loop => used for object
 const myObject ={
  js: "javascript",
  cpp:"c++",
  rp: "rubi"
 }
 for (const key in myObject) {
  //console.log(`${key} shortcut for ${myObject[key]}`);
 }

 // for-in loop => used by array
 const programming =["js" ,"cpp","css","java","c","py"]
 for (const key in programming) {
  //console.log(programming[key]);
 }


 // for-in loop =>  does not used for map
 const map1 = new Map()
  map.set('in',"India")
  map.set('usa',"United States of America")
  map.set('fr',"France")
  map.set('in', "india")

  for (const [key ,value] in map1) {
     // console.log(key, ': ->',value); 
  }

   // for- each loop

   const cooding = ["js","java","cpp","css","py","html"]
   cooding.forEach(function (val){
    //console.log(val);
   })

  //  cooding.forEach((item)=>{
  //   console.log(item);
  //  })

  function printMe(item){
    //console.log(item);
  }
  cooding.forEach(printMe)

//  cooding.forEach((item, index,arr)=>{
//   console.log(item, index,arr);
//  })

const mycoding =[{
  languageName : "javascript",
  languageFileName : "js"
},
{
  languageName : "java",
  languageFileName : "java"
},
{
  languageName : "python",
  languageFileName : "py"
}
]
mycoding.forEach((item)=>{
  console.log(item.languageName);
})