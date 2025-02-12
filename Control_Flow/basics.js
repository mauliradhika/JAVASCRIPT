//Comparision: <, >, <=, >=, ==, !=, ===, !==

//if-esle
const temperature = 42

if(temperature<50){
    console.log("Less than 50");
} else {
    console.log("Greater than 50");
}

const score = 200
if(score>100){
    const power = "Fly"
    console.log(`User Power: ${power}`);
}

// ',' can be used in implicit if-else for multiple statements

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if((userLoggedIn && debitCard) && (loggedInFromGoogle|| loggedInFromEmail)){
    console.log("Allowed to buy courses");
}