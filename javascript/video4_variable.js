const accId = 1234
let accEmail= "vaishnaviverma2701@gmail.com"
var accPassword = "12345"
accCity = "raipur"
 let accState; // it is show the undefind

//accId = 2 // not allow because const not modify
accEmail = "vaishnavi@gmail.com"
accPassword = "7644"
accCity = "bhilai"

console.table([accId,accEmail,accPassword,accCity,accState]);

/*
prefer not use var
because issue is block scope and functional scope

*/
