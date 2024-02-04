console.log("---- Inheritance ----");

 class user {
   constructor(username){
      this.username = username
   }
   logMe(){
      console.log(`USERNAME IS ${this.username}`);
   }
 }

class Teacher extends user{
   constructor(username , email, password){
      super(username)  // it go through the user class constructor
      this.email = email
      this.password = password
   }
   addCourse(){
      console.log(`A new course was added by ${this.username}`);
   }
}
const chai1 = new Teacher("chai","example@gmail.com","123")
console.log(chai1);
chai1.addCourse()
chai1.logMe()
const masalaChai = new user("masalaChai")
masalaChai.logMe()

console.log(chai1 === Teacher);
console.log(chai1 instanceof Teacher);
console.log(chai1 instanceof user);
