const user = {
    username: "Mauli",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Our Website`); 
        console.log(this); 
    }
}

// user.welcomeMessage();Mauli, Welcome to Our Website
// user.username = "Shivam"
// user.welcomeMessage();Shivam, Welcome to Our Website
console.log(this);//{}

function see(){
    let username = "Mauli"
    console.log(this.username);//undefined --> this works under object but not function
}

see();

const sees = function(){
    let username = "Mauli"
    console.log(this.username);//undefined
}

sees();

const sees2 = () => {
    let username = "Mauli"
    console.log(this.username);//undefined
}

sees2();

const addTwo = (num1, num2)=>{
    return num1+num2; //explict return
}

console.log(addTwo(5,7));//12

const addTwos = (num1, num2) => num1+num2;
//const addTwos = (num1, num2) => (num1+num2); ->> No need to write return keyword - implicit return
console.log(addTwos(5,7));//12

//if you have to return oject using arrow:

// const ob = () => {username: "Mauli"};
// console.log(ob());-->undefine

const ob = () => ({username: "Mauli"});
console.log(ob());//{ username: 'Mauli' } -> it is important to wrap them in ()