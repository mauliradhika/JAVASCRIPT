const coding = ["js", "ruby", "py", "java", "cpp"]

coding.forEach(function (value) {
    //console.log(value); 
})

coding.forEach((item) => {
    //console.log(item);
})

function printMe(item){
    //console.log(item);
}

coding.forEach(printMe);//Only reference is needed, Not execution

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr); 
})

const myCoding = [
    {
        languageName: "js",
        languageFileName: "forEach"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "phyton",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})