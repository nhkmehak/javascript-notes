//javascript execution context
//sabse pehle code jab dete hai ek global ec banta
//this is mandatory and ek variabloe hota names THIS jiske andr ye rakh diya jata hai global ec
//sab mai like vn bun etc mai alag alag banta but most imp
//browser mai hame windows object milta hai
//next is  function ec
//another one is eval ec it is prop of global object
//2 phases mai run hyota js ka codee
//first is memory creation phase or creation phase   -- memory create hoti koi execution ni hoti isme
//next is execution phase

//example code hai
let val1 =2;
let val2 =5;
function addnum(num1,num2){
    let total = num1+num2;
    return total;
}
let result1 = addnum(val1,val2);
let result2 = addnum(3,5);

//first global execution hogi and ye this vairable mai allocate hoga
//then memory phase hoga int this all variables are collected and kept together
//unke andr undefined rakha jayega sabme
// val1 val2 undefined
//addnum mai jayegi defination jayegi no execution yet
//reult1 and 2 mai undefined jayega

//third phase is execution phase
//vale=1 and 2 mai unki value gyi
//func mai abhi koi execution ni hui kuch hai ni karne ko abhi kyuki def toh bhej hi di thi
//in liune 7 ab ab result1 pai we come to addnum jo again apna ek execution context banata
//basically again ek new variable enviroment aur execution thread banega
//wahi do phase dubara hone memory aur execution wale iss wale kai liye
//in memory iski val 1 and val2 mai undefined jayega and total mai bhi
//now execution mai val1 mai  2 aur val2 mai 5jayegi fir total mai 7 jayegi
//fir ye total return hojayega in global ec
//fir ye new env mai delete hojayegi
//now next line wahi kahani repeatr new box banega
//2 phases honge same way



//callstack
//last in first out ie lifo is used in this
//see video