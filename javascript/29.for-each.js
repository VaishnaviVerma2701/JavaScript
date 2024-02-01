// for- each loop
console.log("---- for each loop ------");

const cooding = ["js","java","cpp","css","py","html"]

// method 1 :simple function
cooding.forEach(function (val){
 console.log(val);
})

//  method 2: arror function
 cooding.forEach((item)=>{
  console.log(item);
 })


 // method 3
function printMe(item){
 console.log(item);
}
cooding.forEach(printMe)

//  cooding.forEach((item, index,arr)=>{
//   console.log(item, index,arr);
//  })


// method 4: object function
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


// day 30 lead for each loop 

const coding =["js","cpp","java"]
const values = coding.forEach((item)=>{
//console.log(item);
return item
})
console.log(values); //forEach does not return any value


