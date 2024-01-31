
// Day 25  execution context
//  type => 1.globle  2. function 3. eval

 let val1 =10
 let val2 =20
 function addnum(num1,num2){
    let total = num1 + num2
    return total
 }
 let result1 = addnum(val1 , val2)
 let result2 = addnum(6, 8)

 /* step =>
 1. global execution
 2. memory phase
    val1 => undefined , val2 => undefined
    addnum => defination ,result1 => undefined ,result2 => undefined
 3. execution phase
    val1 = 10
    val2=20
    addnum => create new variable enviroment + execution thread 
    result1 => 30
    result2 => 14

     result 1 => create new variable enviroment + execution thread 
      1. memory phase        2.executin context
       val1 =>undefined        num1=>10
       vai2 => undefined        num2 => 20
       total => undefined        total => 30
        
       result 2=> same for  result 1
  */

