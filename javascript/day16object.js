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



//  DAY 17 OBJECT

const tinderUser ={}
tinderUser.id="123abd"
tinderUser.name= "Sammy"
tinderUser.isloggedIn = false
//console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
           firstname: "vaishnavi",
           lastname: "verma"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a" ,2: "b"}
const obj2 = {3:"a", 4:"d"}
const obj4 = {3:"a", 6:"d"}
// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({} ,obj1,obj2,obj4)
// console.log(obj3);

const obj3 = {...obj1, ...obj2,...obj4}
 //console.log(obj3);

 const Users = [
{
 id: 1,
 name:"pihu"
},
{
 id: 2,
 name:"sanu"
},
{
 id: 3,
 name:"minu"
}
 ]
 console.log(Users[1].name)

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log((tinderUser.hasOwnProperty('id')));


