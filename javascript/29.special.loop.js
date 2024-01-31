 // +++ High Order Loop In Array

 /*for of
 for in
 ["","",""]
 [{},{},{}] =>  for object
  */
 // for of loop
 const arr = [1, 2, 3, 4, 5]
  for (const num of arr) {
    console.log(num);
  }

  const greeting = "hello world"
  for(const greet of greeting ){
    console.log(` each char is ${greet}`)
  }


  //HashMaps

  const map = new Map()
  map.set('in',"India")
  map.set('usa',"United States of America")
  map.set('fr',"France")
 console.log(map);