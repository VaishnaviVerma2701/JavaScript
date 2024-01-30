 
      // Day 23  This and Arror functin

const user ={
    username : "rekha",
    price: 786,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this); 
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);  // print {}

function chai() {
    //console.log(this);
    let username = "salu"
    console.log(this.username); // print undefined
}
chai()

const chai1 = function(){
    let username = "salu"
    console.log(this.username);  // print undefined
}
chai1()

//arror function
//syntax ()=>{}

//arror function store in obj / variable
const chai2 = () =>{
    let username = "salu"
    console.log(this.username); // print undefined
    console.log(this); // print {}
}
chai2()

//object form / explicte form
// if we use {} than neccessary to write return keyword
const addtwo =(num1 , num2)=>{
    return (num1 + num2)
}
console.log(addtwo(6,8))

// implesite form 
//if not use {} than not use retuen keyword
const addtwo1 =(num1 , num2)=> num1 + num2
console.log(addtwo1(6,8))

const addtwo2 =(num1 , num2)=> (num1 + num2)
console.log(addtwo2(8,8))

const addtwo3 =(num1 , num2)=> {username : "puja"} // print undefine
console.log(addtwo3(4,6));

const addtwo4 =(num1 , num2)=> ({username : "puja"}) // print username puja
console.log(addtwo4());



//    Day 24  Immediately invoked function Expressions

(function name() {
    console.log(`DB CONNECTED`);
})();

// after complete function use (;) than is show the end of function
// if not use (;) than next function show error

(()=>{ // without parameter
    console.log(`DB CONNECTED TWO`);
})();

((name)=>{ // with parameter
    console.log(`DB CONNECTED TWO ${name}`);
})("vaishu");