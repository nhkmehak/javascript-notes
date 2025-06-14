const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})  //map is also an cakllback func like for each

const newNums = myNumers
// map(): The map() method creates a new array by calling a provided 
// function on every element in the calling array. 
// It transforms each element based on the logic in its callback.
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)  //filter mai jo bhi true hota wahi paas hota also chaing allowed

console.log(newNums); 