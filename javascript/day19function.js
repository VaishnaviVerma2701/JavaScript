//     day 19 FUNCTION and PARAMETER

function myfunction () {
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
//myfunction() // write to execute the function

// function addTwonum(number1 ,number2) {  //function parameter
//    console.log((number1+number2)); 
// }
//addTwonum(6,"a") //  this is function argument

//const result = addTwonum(7,8) // return 15
 //console.log("result :" ,result); //  return undefined


//  function addTwoNum(number1,number2){
//     let result = number1 + number2
//     return result
//     //return number1+ number2
//  }
 //const result = addTwoNum(3,6) // does not print any value because we initilize return kayword
 //console.log("result :" , result) // return 9


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
 console.log(userlogin("nam")); // give the  then does not print sam
