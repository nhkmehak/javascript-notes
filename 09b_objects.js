// const tinderUser = new Object() //another way of decalring object only diff this is singleton object
const tinderUser = {} //this isnt singleton

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //same arr jaise problem aagyi for merginf them 2 keys bngyi obj3 mai
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //correct way to merge

const obj3 = {...obj1, ...obj2}  //spread method even better like did in arrays
// console.log(obj3); 


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]  //objects in arrays

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));  // saario keys ko ek arr mai print kardeta
console.log(Object.values(tinderUser));  //similarly ye values ka array return kardeta 
console.log(Object.entries(tinderUser));  //har key aur uski value ko  arr banake
//// ek whole ko arrr mai return kardeta

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // way hai to not write wo upr wala object access itna bada code
// basically ab instructor bolennge toh course obj sai course instructor access hojayega directly
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }   //this is json aise hi values aati api sai just to understand
[
    {},
    {},
    {}
]  //sometimes aise bhi data milta apis sai arr mai objects
// // api sai hum bas data fetch krte object mai covert krte and use karlete