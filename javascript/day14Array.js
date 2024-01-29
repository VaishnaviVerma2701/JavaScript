     
    //   ARRAY PART1

const myArr = [1,2,3,4,5]
const myArr1 = ["radha","sila","seeta"]
// console.log(myArr);
// console.log(myArr[2]);

const myArr2 = new Array(1,4,8,3)
// console.log(myArr2);

// //Array Method
myArr.push(6)  //add the element in back side
// console.log(myArr);

myArr.pop() // remove the element in back side
// console.log(myArr); 

myArr.unshift(9) // add the element in front side
// console.log(myArr);

 myArr.shift() //remove the add in front side
// console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // it is string type
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice , splice
console.log("Original Array is" , myArr); //original array
//slice
const myn1 = myArr.slice(1,3)
console.log("slice value ",myn1);
console.log("slice Array is ",myArr); // slice array 
//splice
const myn2 = myArr.splice(1,3)
console.log("splice Array is" ,myArr); // remove the splice range // splice array
console.log(" splice value ",myn2);

//slice array does not manipulate original array
// splice array maniputale original array



//    day 15 ARRAY PART2 

const heros = ["saktiman", "naagraj","doga"]
const  newheros =["thor","Ironman","superman","flash"]

// heros.push(newheros)
// console.log(heros);
// console.log(heros[3][2]);

//concatination
const allheros = heros.concat(newheros)
 console.log( "all heros is", allheros);

//sperete method
const all_new_heros = [...heros, ...newheros]
// console.log(all_new_heros);

const realArr = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const realArr1 = realArr.flat(Infinity)
console.log(realArr1);

console.log(Array.isArray("nima")); // false
console.log(Array.from("nima"));
console.log(Array.from({name:"nima"})); // this is give empty array

// Array.of method is make a Array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); 