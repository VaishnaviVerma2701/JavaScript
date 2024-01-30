//     day 19 FUNCTION and PARAMETER

function myfunction () {
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
myfunction() // write to execute the function

function addTwonum(number1 ,number2) {  //function parameter
   console.log((number1+number2)); 
}
addTwonum(6,"a") //  this is function argument , print 6a

const result = addTwonum(7,8) // print 15
 console.log("result :" ,result); //  print undefined


 function addTwoNum(number1,number2){
    let result = number1 + number2
    return result
    //return number1+ number2
 }
 const result1 = addTwoNum(3,6) // does not print any value because we initilize return kayword
 console.log("result :" , result1) // print 9


 function userlogin(username ="sam"){
    // if(username === undefined){
    //     console.log("please enter user name");  
    // }

    if(!username){
        console.log("please enter user name");  
    }

    return `${username} just logged in`
 }
 //console.log(userlogin("vaishu"));
 console.log(userlogin());
 console.log(userlogin("nam")); // give the argument  then does not print sam
 


 //    DAY 20 FUNCTION WITH OBJECT AND ARRAY

 function calculateprice(num1) {
   return num1
 }
 console.log(calculateprice(60)); // return 60
 console.log(calculateprice(60,88,999)); // return 60


 function calculateprice1(...num1) {
   return num1
 }
 console.log("B=",calculateprice1(60,88,999))

 function calculateprice2(val1, val2,...num1) {
   return num1
 }
 console.log( "C=",calculateprice2(60,88,999,100,54,99)) // 

 //using object
 const user ={
username: "mina",
price : 123
 }
 function handleobj(anyobj) {
   console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
 }
 handleobj(user) // print username mina and price 123

 handleobj({ // print username sam and price 77
   username :"sam",
   price:77
 })

 //using array 

 const myarr=[30,70,80,90]
 function returnSecondValue(getarr) {
   return getarr[1]  // print value of index 1
 }
 console.log("value of array index 1=",returnSecondValue(myarr));
