const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )  //inbuilt loop on arr
//this is an higher order function tho
  
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  //three diff ways to use or pass a function for the use of foreach

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )  //it has access to all these also not only item

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} ) //arr kai andr object kai andr ek prop ki value nikal li