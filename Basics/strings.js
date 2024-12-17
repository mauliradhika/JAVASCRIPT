const name = "mauli";
const repoCount = 5;

//console.log(name + repoCount + " Value"); - Outdated

console.log((`Hello my name is ${name} and my repo count is ${repoCount}`)); //String Interpolation

const gameName = new String('Mauli-Radhika');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);// last char not included
console.log((newString));

const anotherString = gameName.slice(0,4);// last char not included
console.log(anotherString);

const otherString = gameName.slice(-4,2);// we can also use negative value, as in reverse
console.log(otherString);

const newString1 = "     mauli    ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://mauli.com/mauli%20radhika";
console.log(url.replace('%20', '-'));

console.log(url.includes('mauli'));//true

console.log(gameName.split('-'));
