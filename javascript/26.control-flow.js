 
 const isuserloogedin = true
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
