const name = "nanu"
const repocount = 50

// console.log(name + repocount + "Value");
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('bhumika-verma')
console.log(gamename);
console.log(gamename[0]);
console.log(gamename._proto_);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));

//substring method
const newString = gamename.substring(0, 4)
console.log(newString);

//slice method
const anotherString = gamename.slice(-9,4)
console.log(anotherString);

//trim method
const newstring = " bhumi "
console.log(newstring);
console.log(newstring.trim())

//replace method
const url = "https://vaishnavi.com/vaishnavi%20verma"
console.log(url.replace('%20', '-'));

//incude method = define the varible present or not
console.log(url.includes('verma'))

console.log(gamename.split('-'))

