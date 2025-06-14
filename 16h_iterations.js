const myNums = [1, 2, 3]
// array.reduce(callbackFunction, initialValue)



// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) 


//accumalator aur current value milti isme
//here we return acc + currval 
//that , 0 is the inital value
//accumalotor starting with zero as we wrote
//and current value is the first value in array
//then accumalotor value becomes there sum and current value becomes the next element of the array 
//this i sused in for example sum of bills in shopping carts etc


//writing above in arrow function
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, cur) => acc + cur.price, 0)

console.log(priceToPay);    