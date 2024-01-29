 //  day16 object

 // object literals
 const mysym = Symbol("key1")
 const user ={
    name: "mina",
    "full name":"mina verma",
    [mysym]:"mykey1", // this is Symbol type  define under []
    mysym:"mykey1", // this is string type 
    age:18,
    location: "bhilai",
    email: "mina@gmail.com",
    isloggedIn: false,
    lastLoginDay:["monday","saturday"] 
 }
//  console.log(user.email);
//  console.log(user["email"]);
//   console.log(user.full name);// error
//  console.log(user["full name"]);
//  console.log(user[mysym]); //because it is symbol

 user.email="mina@google.com"
 console.log(user.email);

 //Object.freeze(user) // this is freeze the object connot change the user object
//  user.email="mina@chatgpt.com"
//  console.log(user);

// add function in user object
user.greeting = function(){
    console.log("hello  js user");
}

user.greeting1 = function(){
    console.log(`hello  js user ,${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting1());
console.log(user.greeting); //function anonymous

