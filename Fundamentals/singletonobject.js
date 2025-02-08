//const twitterUser = new Object(); - Singleton
const twitterUser = {}; //Non-Singleton

twitterUser.id = "123";
twitterUser.name = "Sam"
twitterUser.isLoggedIn = false

console.log(twitterUser);

const regularUser ={
    email: "Someone@gmail.com",
    fullName: {
        username: {
            firstName: "Mauli",
            lastNAme: "Radhika"
        }
    }
}
console.log(regularUser.fullName);

const ojb1 = {
    1: "a",
    2: "b"
}
const ojb2 = {
    3: "a",
    4: "b"
}
//const obj3 = {ojb1, obj2}--nested objects, but we needed the elements in a object
//const obj3 = Object.assign({}, ojb1, ojb2);//{}-target and others source

const obj3={...ojb1, ...ojb2}//spread
console.log(obj3);

const users = [
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
    },
    {
    },
]

users[1].email;
console.log(twitterUser);

console.log(Object.keys(twitterUser));
console.log(twitterUser.hasOwnProperty('isLoggedIn'));
