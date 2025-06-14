const score =30 //js automatically defines as number
const balance = new Number(400) //exlcusively defines it as number also in console you can see props of it for this
//like we did in string
//tostring
//toprecision    for decimal etc
//tolocale string for commas
console.log(score)
console.log(balance)
//...............math............................
console.log(Math); //see better in browser console
console.log(Math.abs(-4)); //absolute value neg to pos but pos to pos only
console.log(Math.round(4.6)); //rounds off
console.log(Math.ceil(4.2)); //chooses top number only 
console.log(Math.floor(4.9)); //only below value
console.log(Math.min(4, 3, 6, 8)); 
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//value between 0 and 1 always
console.log((Math.random()*10) + 1); //min value 1
console.log(Math.floor(Math.random()*10) + 1); //integer

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //formula learn used for making dice etc
