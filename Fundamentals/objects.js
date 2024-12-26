//Singleton:if made through constructor - (Object.create)
//NOT Singleton: if made through literals

//Object Literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Mauli",
    mySym: "mykey1",//[mySym] -- this refers to a symbol (&not string)
    age: 18,
    location: "Nagpur",
    email: "mauli@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "Full Name": "Mauli Radhika",
}

console.log(JsUser.isLoggedIn);
console.log(JsUser["isLoggedIn"]);//stored as a String
console.log(JsUser["Full Name"]);
console.log(JsUser.mySym);//to access symbol -- JsUser[mySym], no "_" req

console.log(typeof JsUser.mySym);//string, but we wante dthe output to be symbol

JsUser.email = "mauli.r@gmail.com";
//Object.freeze(JsUSer);//you can't manipulate the values after this command

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());