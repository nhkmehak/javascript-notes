//events run sequentially
//there are some exceptions ttho
//they work on any activty like click drag drop etc

//html code
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>htnml Events </title>
// </head>
// <body style="background-color: #414141; color: aliceblue;">
//     <h2>Amazing image</h2>
//     <div >
//         <ul id="images">
//             <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
//             <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" ></li>
//             <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
//         </ul>
//    </div>
// </body>
// <script>
    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")   //this approach works when scalable application dont write this onlick thing inside html code
    // }   
    
    //even better is event approach which has alot of features
    // document.getElementById('owl' ).addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)  //false is the third parameter even tho it is there by default sometimes in interview asked
 
    
     // attachEvent() - another approach used in earlier times
    // jQuery - on  - another framework .on use hota tha isme

    // type, timestamp, defaultPrevented - to stop deafult 
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode          
    //these are the most important events that are present in the event object which is explained below

     //whenever we make an event we get an event object like in this it is e which we are pasing in yhe functiojn
     //console it to see what all this object has that can be used by us



    //event propogation
    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)                   //this is activated when we click oinside the ul                    
    
    
    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()  //this is used to stop bhar ka only owl print hoga ul nahi
    // }, false)     //this is activated when we click on owl image   
                     //but here upar wala will also be activated as owl is inside ul only
                     //in this first owl print then ul wale as we go from inside3 to ouside
                     //but there is capturing mode to where we write tru instead of false
                     // there opposite happens, top to bottom        
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault(); //default ni hoga
    //     e.stopPropagation()  //ul wala stop karne kai liye
    //     console.log("google clicked");
    // }, false)
   
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    
        
    })
    
    //removeIt.parentNode.removeChild(removeIt)
// </script>
// </html>