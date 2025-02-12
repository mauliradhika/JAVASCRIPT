//Immediately Invoked Function Expressions (IIFE) --> to protect from pollution of global scope

//Named IIFE
(function learn(){
    console.log(`DB Connected`);   
})();
//(function defination) (execution); -> ; to stop the context

//Unnamed IIFE
( () => {
    console.log(`DB Connected Again`);  
} )();

//Parameterized IIFE
( (name) => {
    console.log(`DB Connected To ${name}`);  
} )('Mauli');