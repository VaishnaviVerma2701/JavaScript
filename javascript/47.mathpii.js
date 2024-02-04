 
 console.log(" day 47: mathpi and object (decribe in 43)");
 // this day define the change the property of object
 
 //console.log(Math.PI);
 Math.PI = 5
 //console.log(Math.PI);// can't be change the value of math.pi

 const decripter = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(decripter);

const chai ={
    name : "ginger chai",
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nhi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name")); // chai is aobject and name price and isAvailable is properti

// change the property of writeable   and enumerable name
Object.defineProperty(chai,'name',{
    writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// iteration
for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function' ){  // if create function inside of object then check the consdition
    console.log(`${key}: ${value}`);  // if enumarable property is true than print the name  either not print the name property in object(chai)
}}