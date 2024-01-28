 //basic comparison

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

// comparison if datatype is  different

console.log("2" >1); // true
console.log("02" >= 1); // true
 // this type of comparison first conver string to number and than compare

//this type of comparison  always show the confusion
 console.log(null > 0);//false
 console.log(null == 0);//false
 console.log(null >= 0); //true

 console.log(undefined > 0);//false
 console.log(undefined == 0);//false
 console.log(undefined >= 0); //false

 //strincy check(===)
 //it is stricly check the datatype of varisble
 console.log("2" === 2); // false



