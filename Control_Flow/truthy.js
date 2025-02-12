const userEmail = []

if(userEmail){
    console.log("Got User Email");
} else {
    console.log("Didn't recieve the email");
}

/* Falsy Values:
    false, 0, -0, BigInt 0n, "", null, undefined, Nan;
*/

/* Truthy Values:
    true, 1, [], "0", 'false', " ", {}, function(){}
*/

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

/* Note:
    false == 0 -> true
    false == '' -> true
    '' == 0 -> true
*/

//Nullish Coalescing Operator (??) : Null and Undefined

let val1;
//val1 =5 ?? 10 -> 5
//val1 = null ?? 10 -> 10
//val1 = undefined ?? 15 -> 15
val1 = null ?? 10 ?? 20 //10

console.log(val1);

//Terniary Operator:

//condition ? true : false

const price = 100

price >=80 ? console.log("More than 80") : console.log("Less than 80");

