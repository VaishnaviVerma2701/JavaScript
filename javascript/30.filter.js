  console.log("-------- filter --------");

// Filter => it take call back function and condition to check each case
// call back function -> ()=>()

//method 1: simple 
const myNum = [1 ,2, 3, 4,5,6,7,8,9]
const newNum = myNum.filter((num)=>num > 4)
//console.log(newNum);


//method 2:
const myNum1 = [1 ,2, 3, 4,5,6,7,8,9]
const newNum1 = myNum.filter((num)=>{
    return num > 4
})
//console.log(newNum1);


//method 3:
const myNum2 = [1 ,2, 3, 4,5,6,7,8,9]
const newNum2 = [] 
myNum.filter((num)=>{
 if(num>4){
    newNum2.push(num)
 }
})
//console.log(newNum2);


// method 4:
const book =[
    {title:'book one', genre:'Science', publish: 2009, edition: 2014},

    {title:'book two', genre:'history', publish: 2010, edition: 2011},

    {title:'book tree', genre:'fiction', publish: 2011, edition: 2012},

    {title:'book four', genre:' non-fiction', publish: 1876, edition: 1899},

    {title:'book six', genre:'Science', publish: 2009, edition: 2014},

    {title:'book seven', genre:'history', publish: 2009, edition: 2014}
];
 let userbook =book.filter((bk)=>bk.genre === 'history')
let userbook1= book.filter((bk)=>{
     return bk.publish >=2000 && bk.genre ==='history'
    })
//console.log(userbook1);
// userbook1 use return keyword because we use scope {} , but userbook does not use


// +++++++ MAP   ++++++

console.log(" -------- MAP ------");
//method 1:
const myNumes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums= myNumes.map((num)=>num+10)
//console.log(newNums)


// method 2:
const myNumes1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums1= myNumes.map((num)=>{
     return num+10})
//console.log(newNums) // using scope{}


// method 3:
const newnums =myNumes
               .map((num)=> num*10) // 10 20 30 40... 
               .map((num)=>num+1) // 11 21 31..
               .filter((num)=>num>40) //41 51 61 71 81 91
               console.log(newnums);


// +++++++ REDUCE ++++
const num =[1, 2, 3]
// method 1 : simple function
const total = num.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0)
console.log(total);

// method 2: arrow function
const total1 = num.reduce((acc,curr)=>acc+curr , 0)
console.log(total1);

// method 3 : object
const course =[
    {
       itemName :"js course",
       price: 2000
    },
    {
        itemName :"py course",
        price: 3000
     },
     {
        itemName :"java course",
        price: 5000
     },
     {
        itemName :"c course",
        price: 1000
     },
]
 const price =course.reduce((acc , item)=> acc + item.price,0)
 console.log(price);


