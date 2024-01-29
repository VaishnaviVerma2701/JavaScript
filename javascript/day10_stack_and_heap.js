
// Stack(Primitive) , Heap (Non-Primitive)

// stact => store the copyvalue
let myname = "vaishnaviverma"
let anotherName = myname
anotherName = "sandhya"

console.log(anotherName);
console.log(myname);

 // Heap  => store the reference value
let user ={
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = user
userTwo.email = "userTwo@gmail.com" // access the object
console.log(user.email);
console.log(userTwo.email);
