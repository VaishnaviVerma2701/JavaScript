// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreateDate = new Date(2024,0,29)
let myCreateDate1 = new Date(2024,0,29,5,3)
let myCreateDat2 = new Date("2024-01-29")
let myCreateDate3 = new Date("01-29-2024")
 console.log(myCreateDate3.toLocaleString());

 let myTime= Date.now()
 console.log(myTime);
 console.log(myCreateDate.getTime()); //give the time in millisecond
 console.log(Math.floor(Date.now()/1000)); // give the time in second

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth());
 console.log(newDate.getMonth()+1);
 console.log(newDate.getDay());


