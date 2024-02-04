
 /* DAY 45 : CLASS CONSTRUCTOR ANS STATIC   */
 class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
 }
 const chai = new User("chai","chai@gmail.com","132")
 console.log(chai.encryptPassword());
 console.log(chai.changeUsername());


// behind the scene == using function
 function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
 }
 User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
 }

 User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
 }
 const tea = new User1("tea","tea@gmail.com","132")
 console.log(tea.encryptPassword());
 console.log(tea.changeUsername());



// static propertity
console.log("--- static propertity -----");

class user {
   constructor(username){
      this.username = username
   }
   logMe(){
      console.log(`username is: ${this.username}`);
   }
     static createId(){
      return `123`
    }
}

const vaishnavi = new user("vaishnavi")
//console.log(vaishnavi.createId());

class Teacher extends user{
   constructor(username, email){
      super(username) // it go through the user class constructor
      this.email = email
   }
}
const iphone = new Teacher("iphone" , "iphone@gmail.com")
console.log(iphone);
console.log(iphone.createId()); // crateId is static then it can't be access