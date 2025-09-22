//unfulfilled, reject, resolve

let promise = new Promise ( (resolve, reject) => {
    console.log("I am a promise")
    resolve("Success")
    //reject("Error")
})

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

//.then() -> promise fulfilled & .catch() -> promise reject

const getPromise = () => {
    return new Promise( (resolve, reject) => {
        console.log("fetching promise")
        resolve("Success")
        //reject("Error")
    })
}

let value = getPromise();
value.then( (res) => {
   console.log("Promise Fulfilled", res) 
})
value.catch( (err) => {
    console.log("Promise Rejected", err)
})

//Promise Chaining

function asyncFunc1(){
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1 ...")
            resolve("Success")
        }, 4000)
     });
}

function asyncFunc2(){
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2  ...")
            resolve("Success")
        }, 4000)
     });
}

console.log("Fetching data1")
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res)
    console.log("Fetching data2")
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res)
    })
})

let pro = getData(1);
pro.then((res) => {
    console.log(res)
    let pro2 = getData(2)
    pro2.then( (res) => {
        console.log(res)
    })
})

getData(4).then((res) => {
    return getData(5)
}).then((res) => {
    return getData(6);
}).then((res) => {
    console.log("Success")
})