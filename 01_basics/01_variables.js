const accountId=144553
let accountEmail="sundram@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])