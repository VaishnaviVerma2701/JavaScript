 
         /// IF ELSE CASE CONCEPT 

 const temp = 41
 if(temp<50){
    console.log("temp is less than 50");
 }
 //console.log("temp is greter than 50"); // this is also run beacuse this is not relate to if condition
 else{
    console.log("temp is greter than 50")
 }


 const score =200
 if(score>100){
    const power ="fly"
    console.log(`user power:${power}`);
 }
 //console.log(`user power:${power}`); show error because power is local variavble

 const balance = 1000
 //if(balance>500) console.log("test") , console.log("test2"); this is not effective
 if(balance<500){
    console.log("less than");
 }
 else if(balance<750) {
   console.log("less than 750");
 }
 else if(balance<1000) {
   console.log("less than 1000");
 }
 else{
   console.log("less than 1200");
 }


 const userLoggedIn = true
 const debitCard = true
  const loggedInFromGoogle = false
 const loggedInfromEmail = true

  if(userLoggedIn && debitCard && 2==3){
   console.log("allow to buy course");
  }
if(loggedInFromGoogle ||loggedInfromEmail ){
   console.log("user logged in");
}


//  ++++++ SWITCH CASE CONCEPT ++++++++

 const month =3 
 switch (month) {
   case 1:
      console.log("januvary");
      break;
 
      case 2:
      console.log("fab");
      break;

      case 3:
      console.log("march");
      break;

      case 4:
      console.log("april");
      break;
   default:
      console.log(("defaul match"));
      break;
 }

 const monthname ="april" 
 switch (monthname) {
   case "jan":
      console.log("januvary");
      break;
 
      case "feb":
      console.log("fab");
      break;

      case "march":
      console.log("march");
      break;
      
      case "april":
      console.log("april");
      break;
   default:
      console.log(("defaul match"));
      break;
 }


     //+++++  INTRESTING CONCEPT ++++
     
     const userEmail ="vaishu@gmail.com"
     const userEmail2 =""
     const userEmail1 =[]
     if(userEmail2 ){
      console.log("got user email");
     }
     else{
      console.log("dont have user email");
     }

     /* 1. false value
     false , 0 ,-0 ,bigin 0n , null ,"" , undefined , NaN
     
     2. true value
     "0" , 'false' , " " , [] ,{} , function(){} 
     baki sab jo false value me nhi hai
      */

     if(userEmail2.length == 0){
      console.log("array is empty");
     }

     const emptyobj ={}
     if(Object.keys(emptyobj).length === 0){
      console.log("object is empty");
     }


     //++++++ Nullish Coalescing Opertor(??) : null undefined +++++

     let val1;
     //val1 = 5 ?? 10
    //val1 = null ?? 10
   // val1 = undefined ?? 15
   val1 = null ?? 10 ?? 20
     console.log(val1);
    // NOTE => if null or undefined value is first than print second value otherwise first value



     // ++++++ TERNARY OPERATOR +++++
    // condition ? true : false
    const num = 100
    num <=80 ? console.log("less than 80") : console.log("more than 80");
