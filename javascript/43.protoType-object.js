/* day 43 */
console.log("---- day 43: protoType(oop)  and Object --------");

// Object =>  object is  also   function
function multipleBy5(num) {
    return num * 5
}
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++ // this is identify the which score is increment
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
chai.printMe()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

console.log("------- protoType ------");

// let myName = "vaishnavi  "
// let myChannel = "js"
// console.log(myName.truelength);
// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vaishnavi = function () {
    console.log(`vaishnavi is present in all abject`);
}

Array.prototype.heyVaishnavi = function () {
    console.log(`vaishnavi is present in all abject`);
}
heroPower.vaishnavi() //  for call the function
myHeros.vaishnavi()
//heroPower.heyVaishnavi()
myHeros.heyVaishnavi()



//   protoType inheritance

const user = {
    name: "teacher",
    email: "teacher@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // inherite to teachingsupport
}
Teacher.__proto__ = user // inherite to user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"vaishnavi".trueLength()
"iceTea".trueLength()