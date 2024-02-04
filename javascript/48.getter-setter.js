
console.log(" ---- day 48 setter getter -----");

// method 1: through the class
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get password() {
        // return this.password.toUpperCase() it is show the error

        //return this._password.toUpperCase()
        return `${this._password}vaishnavi`
    }
    set password(value) {
        //  this.password = value show the error
        this._password = value
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
}

const vaishnavi = new User("v@verma.ai", "num")
console.log(vaishnavi.password);
console.log(vaishnavi.email);


//  method 2 : through the function
console.log(" ----- getter setter using function ------");

function user(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', { // eske pass khud ka this keyword nhi hota hume dekh padta hai
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', { // eske pass khud ka this keyword nhi hota hume dekh padta hai
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}
const chai = new user("chai@chai.com", "chai")
console.log(" using function =", chai.email);



// method 3: through the object
console.log(" ---- getter setter using object -----");

const user1 = {
    _email: "v@vaishnavi.com",
    _password: "abc",

    // get or set ko koi matlabe nhi method se ye bas property dekhta hai memoty me like _ email hai email hai
    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}
const tea = Object.create(user1)
console.log(" using object =", tea.email);