const accountId = 144553;
let accountEmail = "mauli@gmail.com";
var accountPassword = "12345";
accountCity = "Nagpur";
let accountState; //undefined: as there is no value

// accountId = 2; NOT ALLOWED (Can't change const value)

accountEmail = "mr@gmail.com";
accountPassword = "21212";
accountCity = "Ranchi";
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

//let, var(no concept of scope) can be changed, so prefer not using var because of issue in block & functional scope.
