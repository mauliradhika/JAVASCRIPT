function printDetails(){
    console.log("Mauli Radhika");
    
}

//printDetails()-- printDetails(Reference) & ()Execution

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers();//NaN - Not A Number
const result = addTwoNumbers(3,3); // Value undefined for result variable

function addNumbers(number1, number2){
    let res = number1+number2;
    return res;
}
const res = addNumbers(7, 8);
console.log("Result: "+res);

function loginUserMessage(username){
    return `${username} just logged in.`
}
//This can be solved by if-else or setting a default value
//default value - function loginUserMessage(username = "User"){

console.log(loginUserMessage("Mauli"));//Mauli just logged in.
console.log(loginUserMessage(""));// just loggen in.
console.log(loginUserMessage());//undefined just logged in.

function calculateCartPrice(...num1){
    return num1;//returns an array
}

console.log(calculateCartPrice(200,400,1200));

const user = {
    username: "Mauli",
    productPrice: 1200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.productPrice}`);
}
handleObject(user)
handleObject({
    username: "Kush",
    productPrice: 400
})

const newArr = [200,400, 100, 800]

function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(newArr));
console.log(returnSecondValue([1000,2000,5000]));