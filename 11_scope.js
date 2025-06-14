 //var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); //andr is if wale mai scope of variable wahi tk hai bhar ni ayega 
    
}



// console.log(a);  //jo bhar define kiya hai uski scope iss tk hai
//also var mai problem aati scope ko leke isiliye we dont use it to define
// console.log(b);
// console.log(c);
//top sum up for once jo bhi funtion else if wagera kai andr banta wo alg scope banti
// but jo main bhar global scope mai hote unhe hum inn sab mai bhi access karskte unlike unke scope
//walae jo bhar ni access ho sakte unke block sai


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //iska scope toh two kai and he khatam hogya so cant be accessed outside it

     two()  //excecuted

}  //summarising nested func mai andr kai functions can access parent func kai variables just like global scope

// one();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);        //understand scope using this exampole find the error in this
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++




function addone(num){
    return num + 1
}

console.log(addone(5))


const addTwo = function(num){
    return num + 2
}   
addTwo(5)
//another way of writing function variable mai
//in js variables are very powerful they can store anything like func json etc