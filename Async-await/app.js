//async function always returns a promise

async function hello(){
    console.log("Hello!!")
}

//await pauses the execution of its surrounding async function until the promise is settled

function api(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("weather data")
            resolve(200)
        }, 2000)
    })
}

async function getWeatherData(){
    await api();//1st 
    await api();//2nd
}

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout( () => { 
        console.log("data", dataId)
        resolve("Success") 
        //reject("Error")
        if(getNextData){
            getNextData();
        }
        } , 5000)
    });
}

async function getAllData() {
    console.log("getting data1..")
    await getData(1);
    console.log("getting data1..")
    await getData(2);
    console.log("getting data1..")
    await getData(3);
}

//IIFE: Immediately Invoked Function Expression
// (function (){
//
//  })();
//normal function, async, arrow function -> but w/o name
//semi-colon in IIFE is important.

