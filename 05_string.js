const name ="mehak"
const repocount =50
console.log(name+repocount+" Value")//old format
console.log(`hello my name is ${name} and myb repocount is ${repocount}`);//new way
//string is an bject
const gamename =  new String('mehakk') //another way of defining string it has various methods
//write this in browser console then write gamename 
//you see keys
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('h'))
const newstring = gamename.substring(0,4)  //no negative values in this //last val not inncluded
console.log(newstring)
const hehe = gamename.slice(-3,4)
console.log(hehe)