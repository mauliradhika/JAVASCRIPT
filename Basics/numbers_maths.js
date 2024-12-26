const score = 400;

console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(typeof(balance));
console.log(balance.toFixed(2));

const number = 28.8966;
console.log(number.toPrecision(4));//returns a string value

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

//Maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(7.9));
console.log(Math.ceil(4.2));//rounding off to the upper value
console.log(Math.floor(7.9));//rounding off to the lower value
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//important