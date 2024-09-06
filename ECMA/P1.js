//Block bindings
/*
var->global scope
let
const->block scope
*/
var x=120;
if(true){
    console.log(`block scope x=`,x)
}
console.log(`global scope x=`,x)
console.log(`\n`)
if(true){
    let y=343
    console.log(`block scope y=`,y)
}
console.log(`\n`)
try{
    if(true){
        let y=343
        console.log(`block scope y=`,y)

    }
console.log(`global scope y=`,y)

}catch(error){
    console.log(error)
}