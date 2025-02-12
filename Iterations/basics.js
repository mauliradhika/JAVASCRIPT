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