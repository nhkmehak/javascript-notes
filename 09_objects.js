// singleton -- lieteral sai nahi banta hai cunstructor sai banta hai imp 
// Object.create   //this is the constructor method to create object
 
// object literals 

const mySym = Symbol("key1")  //smybol is a datatype


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  //this is how we use symbol as a key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
 
// console.log(JsUser.email)   // how to access object
// console.log(JsUser["email"])  //another way
// console.log(JsUser."fullname") //not posssible as string mai store karayi thi key 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //agr dot sai krenge to string mai hi value milegi isiliye aise karna then only
// // datatype symbol
// // keys string mai hi store hoti backjend mai in general 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //cant be changed after this  
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);             

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //back ticks lagake we are doing streing interpulation
    // // then dollar and bracket kai andr after this we can access same object ki props
    // //  dollar bracket sai we access any variable
}

console.log(JsUser.greeting()); // to get back the function we made we must add () these
// // agar not add the ek uynreferenced anonymous function aajata
console.log(JsUser.greetingTwo());