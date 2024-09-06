//Temporal dead Zone
if(true){
    let val = "blue";
    console.log(`Value =`,val)
}

//block bindings in loops 
for(var i=0; i<2; i++){
    //within block
    console.log(`block =`,i)
}

console.log(`outside block i = `,i)

console.log(`\n`)

for(let j=0; j<2; j++){
    console.log(`block j=`,j)
}

console.log(`outside block j =`,j) // throws an error