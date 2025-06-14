// Immediately Invoked Function Expressions (IIFE)
//if you want to a fuinciton to be executed immediately then we use this
//like for example there is a file for database connection so we want it to be started immediately as soon
//as the function is started then we use this
// or maybe to protect pollution of variables in global scope
//we make a scope for them in a function and execute them immediately 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //do this paranthesis thing to make it an iife
//must put a semicolon to end the function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //parameter passed here  //unmaed iife