const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  //this keyword is for the current context only in object
        console.log(this); //current context print kardeta
    }

}

// user.welcomeMessage() 
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //this gives an empty object in node but not ojn the browser
////this is bec pehle time sirf browser pai execute hota ab locally bhi hojata so browser pai humpe saare
////window object hai isiliye ya saara ata udhr likhe hua

// function chai(){
//     let username = "hitesh"    //function mai when we try to console log this we get bunch of things 
//     console.log(this.username);   //doesnt work as we are in a function only for objects
// }

// chai()

// const chai = function () {
//     let username = "hitesh"     
//     console.log(this.username);  
// }  //here also undefined

const chai =  () => {                 //arrow function
    let username = "hitesh"
    console.log(this);    //isme ek empty function aaraha hai arrow function mai witht this as compared to regular
    //function
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2    //implicit return since one line code so dont write return

// const addTwo = (num1, num2) => ( num1 + num2 )   //same as above
//agar curly braces used then write return in paranthesis dont write

const addTwo = (num1, num2) => ({username: "hitesh"})   


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>{}/())any way we can write