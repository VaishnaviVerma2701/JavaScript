// day 40: Promise

console.log("----------- day 39: promise -------------");

// method 1:
const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptography, netWork
    setTimeout(function () {
        console.log('Async task is complete');
        resolve() // this is connect the resolve and then function
    }, 1000)
})
promiseOne.then(function () {
    console.log("promise consumed");
})


// method 2:
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})


// method 3:
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "example", email: "example39@gmail.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})


// method 4 : use .then and .catch method
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false  // if it is true than print error something went wrong and not print user data
        if (!error) {
            resolve({ usrname: "vaishnavi", password: "123" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.
    then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("the  promise either resolved or rejected"))


// method 5 : try catch method
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true  //  it is  than print error something went wrong and not print user data
        if (!error) {
            resolve({ usrname: "javascript", password: "123" })
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
async function consumePromiseFive() { // async does not handale catch 
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// -------- day 41 Fatch function------
console.log("--------  day 40: Fatch--------");

console.log("------- try catch method --------");
//async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

console.log("------- than catch method --------");

fetch('https://api.github.com/users/VaishnaviVerma2701')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// note : fatch and promise take time to print the data than used await key so data print immidately

//  print github data first and than async  data because  we give 1000ms time , after 1000ms  print data
// response give the data that is not directly access
