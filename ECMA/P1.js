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
// No declaration
try{
    var count=30;
    console.log(`before count=`,count)
    //let count=40; //redeclaration of another variable is a syntax error
    count=50;//re assignmentof new value to the existing variable
    console.log(` after count=`,count)
}catch (error){
    console.log(error)
}
//re declaration is possible in block scope
let num=34;
if(true){
    let num=55;
    console.log(`within block num=`,num)
}
console.log(`outside block num=`,num)
console.log(`\n`)
//reassignment is not possible to constant variable
try{
    const age=22;
    console.log(`before const age=`,age)
    age=24
    console.log(`after const age=`,age)
   

}catch(err){
    console.log(err)
}