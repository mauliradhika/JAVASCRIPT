//Basics: 

function sum(a, b){
    console.log(a+b)
}
function calculator(a , b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum)
calculator(3, 4, (a,b) => {
    console.log(a*b)
})

//setTimeout takes a callback value
const hello = () => {
    console.log("Hello!!")
}

setTimeout(hello, 1000);

//Callback Hell:

function getData(dataId){
    setTimeout( () => { 
        console.log("data", dataId) 
    } , 2000)
}

function getData1(dataId, getNextData){
    setTimeout( () => { 
        console.log("data", dataId) 
        if(getNextData){
            getNextData();
        }
    } , 2000)
}

getData1(1, () => {
    console.log("getting data2 ...")
    getData1(2, () => {
        console.log("getting data3 ...")
        getData1(3);
    });
} );
