
// ++++++++++ number ++++++++++
const score = 400
console.log(score);

const balance =new Number(100) //declearation of Number
console.log(balance);

// convert number to string
console.log(balance.toString()); // it is convert the number to string
console.log(balance.toString().length); // defind length

//fixing method
console.log(balance.toFixed(2));//100.00

//precision method
const anothernum=123.8798
console.log(anothernum.toPrecision(3)); //124
console.log(anothernum.toPrecision(2)); //12e+2

//tolocaleString method
const hundreds =100000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++ MATHS +++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.7)); //5
console.log(Math.ceil(4.2)); // give the higher value like 5
console.log(Math.floor(4.5)); //give the lower value like 4
console.log(Math.pow(2,5));//32
console.log(Math.sqrt(16));//4
console.log(Math.min(2,5,1,9));  //1
console.log(Math.max(2,5,1,9)); //9

console.log(Math.random()); //give the value btw 0 to 1
console.log((Math.random()*10)+1); // this formula give the positive value not 0 value
console.log(Math.floor(Math.random()*10)+1);


// this formula give the value btw min and max value( 10 to 20)
const min =10 
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);


