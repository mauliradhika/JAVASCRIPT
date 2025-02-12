/*Syntax
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Enter Under 4");
        break;
}
//If break is commented, all the cases after it are printed except default
