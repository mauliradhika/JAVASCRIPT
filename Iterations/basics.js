//for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is the mid point");
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop Value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop Value : ${j} and It's Outer Loop: ${i}`);
        //console.log(i + '*' + j + '=' +(i*j));
    }
}

let myArr = ["Flash", "Batman", "Superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
}

//Keywords: break & continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        break;// Complete Loop Ends
    }
    console.log("Value of i is: "+i);
    
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;//The particular iteration is SKIPPED
    }
    console.log("Value of i is: "+i);
    
}

//While Loop

let index = 0
while(index <= 10){
    //console.log(`Value of index is ${index}`);
    index = index + 2;
}

let myArray = ["Flash" , "Batman" , "Superman"]

let arr = 0;
while (arr<myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}

//Do-While Loop

let score = 11

do {
    console.log(`Score is ${score}`);
    score = score + 2;
} while (score<=10);