//2 types primitive and non primitive based on kis type mai data ko memory mai lkkha jata 
//hai aur access kiya jaata hai
//primitive(call by value) 7 - string, number, boolean, null, big int, symbol, undefined

//reference type/non primitive - array, objects, functions
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid)