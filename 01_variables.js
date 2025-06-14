// const cant be change
const accountId = 12434
let accountEmail = "mehak@gmail.com"   //let,const, var declares a space in memory of some 
                                       //name where you can store data
                                       //var is not used only let is used as in old js var had a problem of scope ie {}
var accountPassword = "helllooo"
let accountcity = "jaipur"
let accountstate; //undefined by default
console.log(accountId);
//accountId = 191919
accountEmail = "ishaank@gmail.com"
accountPassword = "hehehe"
//console.log(accountEmail);
//console.log(accountPassword);
console.table([accountEmail, accountId, accountPassword, accountcity, accountstate]) //better method to print all