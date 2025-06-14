const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
 
// marvel_heros.push(dc_heros); // simply pushes the array as one whole element


// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);  //makes elements of dc as diff elements in main arr

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //array inside array situation

const real_another_array = another_array.flat(Infinity) // if ana rray has array indside arr then it makes it
//one arr only at the end so flatens it bracket mai u write the depth kaha tk karna]
console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))  // checks whether it is an array or not
// console.log(Array.from("Hitesh")) //converts it to an array h i t e s h alag alag elements hojayenge arr kai
// console.log(Array.from({name: "hitesh"})) // impp this gives emopty arr as spceify karna padhta kisko
////arr banana keys ko ya name ko
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));  //of arr banadeta set of varibales to do to unka
 // //  jo from tha wo ek iterable cheex ka arr banata