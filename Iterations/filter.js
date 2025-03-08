const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
//console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]
//this is also available in forEach but it does not return any value

const newNums2 = myNums.filter( (num) => {
    return num > 4
})
//console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]


const nums = []

myNums.forEach( (num) => {
    if (num > 4) {
        nums.push(num)
    }
})

//console.log(nums);//[ 5, 6, 7, 8, 9, 10 ]

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const revised = myNumbers.map( (number) => number + 10 ) //if condition is written inside scope, use return 
//console.log(revised);

//CHAINING

const revised = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(revised);