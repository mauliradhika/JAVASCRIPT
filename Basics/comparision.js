console.log("2" > 1);
console.log("02" > 1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);//Comparision converts null to a number, treating it as 0 or NaN

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//comparision and equality check work differently

//===(strict check)

console.log("2" === 2);//also checks its datatype, so its not allowed
