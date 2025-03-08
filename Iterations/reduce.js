const myNums =[1, 2, 3]

// const myTotal = myNums.reduce(function (acc,curr){
//     console.log(`acc: ${acc} and curr: ${curr}`);
    
//     return acc + curr
// }, 0)

const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)//0: initial value

console.log(myTotal);

const cart = [
    {
       item: "JS",
       price: 2999
    },
    {
        item: "Python",
        price: 2499
    },
    {
        item: "React",
        price: 3499
    },
    {
        item: "Node.js",
        price: 1999
    },
    {
        item: "TypeScript",
        price: 2799
    }
]

const priceToPay = cart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);