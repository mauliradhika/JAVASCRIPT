//Date

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);//object

let myCreatedDate = new Date(2024, 0, 23);//months start from 0
console.log(myCreatedDate.toDateString());

//the more parameters to give, the detailed the output is (year, month, date, hour, min, sec), etc

let myModifiedDate = new Date("2024-01-14");//"_", so 01 == January
console.log(myModifiedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));//in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);//+1 to match the usual trend

//`${newDate.getDay()} and ${newDate.getMonth()+1}`;

newDate.toLocaleString(`default`, {weekday: "long"});