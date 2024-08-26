/*
array
obj(properties)key:value 
map(entries)(key=>value)array of array*/

let car={
    title:"Jeep",
    company:"wrangler",
    year:2024
}

console.log(`object=`,car)

//convert the obj into entries
let out=Object.entries(car)
console.log(`entries (array of key & values)=`,out)//array of key:value

//to entries
let ent=new Map(out)
console.log(`map constructor=`,ent)//entries