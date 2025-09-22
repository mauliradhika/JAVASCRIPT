function sum(a, b){
    console.log(a+b)
}
function calculator(a , b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum)
calculator(3, 4, (a,b) => {
    console.log(a*b)
})

//setTimeout takes a callback value
const hello = () => {
    console.log("Hello!!")
}

setTimeout(hello, 3000);

