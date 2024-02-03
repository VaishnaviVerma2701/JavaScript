 console.log("----- day 42: Object Orianted Programing --- ");
// Note 

/*Object
collection of properties and methods
toLowerCase

why use OOP

parts of OOP

-------- Object literal --------
 Constructor function 
 Prototypes
 Classes
 Instances (new, this)

4 pillars
Abstraction Encapsulation Inheritance Polymorphism */

// object
const user = {
    username: "vaishnavi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log(`username : ${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


/* -------------- constractor function ------------ */
console.log("----- constractor function ---------")
const date = new Date(); //  new keyword is  a constractor function

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this // ise likh bhi sakte hai or nhi bhi ye apna kaam atomatic karega
}
// if write this type than data is owerwrite

//  const userOne = User("vaishnavi", 12, true)
// const userTwo = User("verma", 12, true) 
// console.log(userOne);

// so use new keyword
const userOne = new User("vaishnavi", 12, true)
const userTwo = new User("verma", 12, true)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
