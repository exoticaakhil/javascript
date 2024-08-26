// variable
var x=123; //global scope
let y=133; // block scope
const z=67;
console.log(`var x=`,x)
console.log(`let y=`,y)
console.log(`const z=`,z)
console.log(`\n`)

y=86;
console.log(`re assigned let y=`,y)
x=789.9
console.log(`re assigned var x=`,x)
try{
    z=9897

}
catch(err){
    console.log(`re assigned const z=`,z)

}