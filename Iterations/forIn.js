const myObj = {
    js: 'JavaScript',
    rb: 'ruby',
    cpp: 'C++',
    swift: "swift by apple"
}

for (const key in myObj) {
    //console.log(key);
}
// js
// rb
// cpp
// swift

for (const key in myObj) {
    //console.log(myObj[key]);
}
// JavaScript
// ruby
// C++
// swift by apple

for (const key in myObj) {
    //console.log(`${key} is shortcut for ${myObj[key]}`);
}
// js is shortcut for JavaScript
// rb is shortcut for ruby
// cpp is shortcut for C++
// swift is shortcut for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);//Key of an Array is its index 
}

for (const key in programming) {
    console.log(programming[key]); 
}

//for in can't be used in Maps as it isn't iterative