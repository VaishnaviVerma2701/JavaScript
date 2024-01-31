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