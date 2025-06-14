//truthy or falsy value is to check if the given value is corect and has correct datatype etc
//not simply true and false is checked in this
 
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   //yaha pai object.keys sai ek arr banke agya uski keys ka
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined  //sometimes while usng database etc reposnse is not
//obtained directly two value are obtained or null or undefined also come so for that case we use this
let val1;
// val1 = 5 ?? 10  
// val1 = null ?? 10  //10 got
// val1 = undefined ?? 15  //is used later for another check if we get null or undefined  //15 got here
val1 = null ?? 10 ?? 20 //here 10 as first obtained value is taken



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")