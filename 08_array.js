const myarr =[0,1,2,3,4,5] //square brackets used
//can write diff type of elements also in an array
//array is an object in which we can store data in a single variable
console.log(myarr[0]); //way of accessing value of an array
//in copy operation it makes shallow copy(same reference point ie orignial arr may hi change hoga)
//iska opposite is deep copies
const myheroes = [ "hi", "aksjdlka"]
const myarr2 = new Array(1,2,3,4) //this adds sq brackets on its own

// Array methods

// myarr.push(6) adds in end
// myarr.pop() removes last value

// myarr.unshift(9) adds 9 array kai start mai
// myarr.shift() removes starting ki value

// console.log(myarr.includes(9)); to check ki arr mai 9 hai ki ni gives ans true/false mai
// console.log(myarr.indexOf(3)); index kya hai 3 ka agar 9 krte aur 9 ni hai arr mai then index is -1

// const newArr = myarr.join() //converts arr into string type changed
// console.log(myarr);
// console.log( newArr);

// slice, splice

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3) //prints 1,2

console.log(myn1);
console.log("B ", myarr); //originak arr remanins same after slice


const myn2 = myarr.splice(1, 3) //prints 1,2,3
console.log("C ", myarr); //original arr is manipulated to 0,4,5
console.log(myn2);

