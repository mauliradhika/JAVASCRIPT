"use strict"; //treat all JS code as newer version

//alert(3+3) , we are using nodejs (not browser), so alert can't be written like this;

let name = "Mauli";
let age = 18;
let isLoggedIn = false;
let state;
/*
    1)number => 2 to power 53
    2)bigint
    3)string => "  "
    4)boolean => true/false
    5)null => standalone value
    6)undefined => when value is not assigned
    7)symbol => unique 
*/

//object
console.log(typeof null);// null's type is an object; undefined's type is undefined

//Primitive : 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Reference (Non Primitive) : Array, Objects, Functions

//JS is dynamically typed language

//Memory - Stack (Primitive), Heap (Non-Primitive)

let myYtName = "mauli";
let anotherName = myYtName;
anotherName = "pihu";

console.log(myYtName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "mauli@google.com"

console.log(userOne.email);
console.log(userTwo.email);
