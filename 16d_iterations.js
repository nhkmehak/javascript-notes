const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//for in loop

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
} //this way you can iterate objects also in myobject[key] sai we got value of keys

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);  //this gives the values in arr not a key also arr is an object only
}  //keys print hoti isme 012345 when we try to print keys only unlike in -  for of 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } //map is not iterable so wont print anything here