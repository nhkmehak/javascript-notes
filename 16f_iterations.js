// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); //undefined comes so for each doesnt return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )  //filter returns a value this to access koi specific values

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )  

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')  //jo bhi books mai history hoga genre wo object return

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"  //very useful in real life filter is 
})
  console.log(userBooks);


//   Implicit vs. Explicit Return in Arrow Functions
// The core of the difference lies in whether you have a block body or an expression body in your arrow function.

// Expression Body (Implicit Return) - No {} and No return keyword
// When your arrow function consists of a single expression, you can omit the curly braces {} and the return keyword. The result of that expression will be implicitly returned.
// eg-
// let userBooks = books.filter( (bk) => bk.genre === 'History' );

// Block Body (Explicit Return) - With {} and return keyword
// When your arrow function has multiple statements, or you want to perform more complex logic before returning a value, you must use curly braces {} to define a block body. When you use a block body, you must explicitly use the return keyword to return a value.
// eg-
// userBooks = books.filter( (bk) => {
//     return bk.publish >= 1995 && bk.genre === "History";
// }); 
// in for each no return required