var c = 300 //30 will override this

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a); -> Can't be printed
let a = 300
console.log(a);
//console.log(b); -> Can't be printed
console.log(c); //Output = 30

function one(){
    const username = "Mauli"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    //console.log(website); -> Can't access website
    two()
}

one()

if(true){
    const username = "Mauli"
    if(username==="Mauli"){
        const website = " YouTube"
        console.log(username + website);
    }
}

//Note:

function addOne(value){
    return value+1
}
console.log(addOne(5))//It can we above or below the function

//Expression
const addTwo = function(num){
    return num+2
}
addTwo(5)//This must be below the function as we are assigning it to a const
