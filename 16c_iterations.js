// for of
//these are array specific loops

// ["", "", ""]
// [{}, {}, {}]  //array kai andr object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
} //this is for of it means const iterator(jo bhi iterator hai just like i hota kuch naam dedo) and then object
//write the object jispe loop lagana jaise isme hame arr pai lagana

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps - like array only it is a object but remenbers order of key and value  and no duplicate value

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  //unique values hoti dubara ni print hoga and it holds them in order


// console.log(map);

for (const [key, value] of map) {  //to destructure the map
    // console.log(key, ':-', value);  
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }  //doesnt work  object isnt iterable this way