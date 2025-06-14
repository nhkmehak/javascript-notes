//milisecond time aata in date from jan 1 1970
/*
let myDate = new Date() //date object creat ed
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(typeof myDate) //object++++ 
*/

let myCreatedDate = new Date(2023, 0, 23) //month starts from 0 -jan
//let myCreatedDate = new Date(2023, 0, 23, 5, 3) //5 and 3 are time    
//let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now() //all this used in quizez polls etc

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); converting to sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
}) //'in this internalistaion' then in object customisation needed ctrl space to see props available
    



