// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Chai aur code</h1>
//     <button id="stop">Stop</button>
// </body>
// <script>
//     const sayHitesh = function(){
//         console.log("Hitesh");
//     }
//     const changeText = function(){
//         document.querySelector('h1').innerHTML = "best JS series"
//     }

//     const changeMe = setTimeout(changeText, 2000)

//     document.querySelector('#stop').addEventListener('click', function(){
//         clearTimeout(changeMe)
//         console.log("STOPPED")
//     })
// </script>
// </html>

//java script is synchronous and single threaded that is one by one lines execute hoti one at a time
//single threaded means slow hai but it does delegate text
//upar wala ius default js behaviour
//blocking code - blocks the flow of the code eg read file sync ie file read karke aao tb tk kuch ni hota
//non blocking code - does not block execution saath mai horhe hote kaam - read file async only in nodejs not browser\
//isme baaki kai kaam hore tb tak wo read karke aata hai

//non blocking code is not always useful as think of it this way user ka data liye jab tk store krre pehle hi
//success message bhejdiya what if store ni hua dhang sai
//aise case mai not useful so blocking code is used in such a case
//so you to decide according to situation
