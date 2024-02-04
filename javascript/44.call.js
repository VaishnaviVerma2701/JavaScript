 /*   DAY 44: CALL JS */
 console.log("---- DAY 40 -----");

 function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
 }

 function createUser(username , email , password){
    SetUsername.call(this, username) //.call function are used to take the reference of setUsername function  and eske pass khud ka this nhi hota diya jata hai
    this.email = email
    this.password = password
 }
 const call = new createUser("vaishnavi","vaishnavi@gmail.com","123")
 console.log(call);