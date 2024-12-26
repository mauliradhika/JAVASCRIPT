//Array

const myArray = [0, 1, 2, 3, 4, 5];//true, "mauli" could have been added too, same datatype is not necessary
console.log(myArray[0]);
/*
    shallow copy : same reference point
    deep copy : do not share the same reference point
*/

const myHeros = ["Superman", "Batman", "Spiderman"];
const myArr = new Array(1, 2, 3 ,4, 5)// no [] with new keyword


//Array Methods

myArr.push(6);
console.log(myArr);

myArr.push(7);
myArr.push(8);
myArr.pop();//Pops the last element of the array

console.log(myArr);

myArr.unshift(9);//adds elements at the start of the array
console.log(myArr);

myArr.shift();//no parameters, delets the 1st element of the array
console.log(myArr);

console.log(myArr.includes(9));//returns true or false 
console.log(myArr.indexOf(3));//-1 if it doesn't exist in the array

const newArr = myArr.join();//newArr is of String type
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//Slice or Splice

console.log("A ", myArr);
const myNew = myArr.slice(1,3);//index of array. last index element(here 3) isnt included.
console.log(myNew);
console.log("B ", myArr);

const myNew2 = myArr.splice(1, 3);// last index element is included here
console.log(myNew2);
console.log("B ", myArr);

/* Difference between slice and splice
    slice:  orignal array is not manipulated, last index is not included;
    splice: last index element is also included and those elemnts are removed from the orignal array;
*/

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "batman", "flash"];

marvelHeros.push(dcHeros); 
console.log(marvelHeros); //The 3rd index element is an array themselves
console.log(marvelHeros[3][0]);//way to extract the value from inside the array - not preferred

//concat holds the value in a new array

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros); 

//Multiple arrays can be concatinated using spread

const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

//flat is used to conver nested array into a single array

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const myUsedArr = anotherArray.flat(Infinity);
console.log(myUsedArr);

console.log(Array.isArray("Mauli"));//false
console.log(Array.from("Mauli"));//[ 'M', 'a', 'u', 'l', 'i' ]

console.log(Array.from({name: "mauli"}));//[],can't convert it directly; you've to give a keyword instruction

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));//forms a new array

