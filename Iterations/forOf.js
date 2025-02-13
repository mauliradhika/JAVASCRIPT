// for of - values are directly printed

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello"

for (const greet of greetings) {
    console.log(`Each Letter is ${greet}`);
}

//Maps - Unique values and Same order

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('Fr', "France")

console.log(map);

for (const key of map) {
    console.log(key); 
}
// [ 'IN', 'India' ]
//[ 'US', 'United States' ]
//[ 'Fr', 'France' ]

for (const [key, value] of map) {
    console.log(key, ':', value ); 
}
// IN : India
// US : United States
// Fr : France

const myObj = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':', value ); 
// } -> Object's are not Iterable