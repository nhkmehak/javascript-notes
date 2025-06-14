let score = 33
console.log(typeof score)
let score_ = "33"
console.log(typeof score_)
//suppose we have to the do the operation on number only then we will have to convert string to number
let valueinnumber = Number(score_) //converts it to number data type
console.log(typeof valueinnumber)
let marks = "33abc"
console.log(typeof marks)
let marksinnumber = Number(marks) 
console.log(typeof marksinnumber)
console.log(marksinnumber) // NaN not a number but still type gets converted
let gg = null
let conversion = Number(gg) //converts the value of null to 0       
console.log(conversion); 

//"33" => 33
//"33abc" => NaN
// false => 0, true => 1
let isloggedin = 1
let booleanloggedin  = Boolean(isloggedin)
console.log(booleanloggedin) //prints true
 //1=> true 0=>false
 //"mehak" true
 //"" false
  let numbersome = 33
  let stringno = String(numbersome)
  console.log(typeof stringno)
  console.log(stringno)