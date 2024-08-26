// variable
var x=123; //global scope
let y=133; // block scope
const z=67;
console.log(`var x=`,x)
console.log(`let y=`,y)
console.log(`const z=`,z)
console.log(`\n`)

y="Akhil";
console.log(`re assigned let y=`,y)
x="Anjana"
console.log(`re assigned var x=`,x)
try{
    z="ishan";

}
catch(err){
    console.log(`re assigned const z=`,z)

}


// variable
var a="Anitha"; //global scope
let b="Anil"; // block scope
const c="Anitha Anil";
console.log(`var a=`,a)
console.log(`let b=`,b)
console.log(`const c=`,c)
console.log(`\n`)

b=1;
console.log(`re assigned let b=`,b)
a=2
console.log(`re assigned var a=`,a)
try{
    c=3

}
catch(err){
    console.log(`re assigned const c=`,c)

}