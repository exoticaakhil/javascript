//Object.assign(src,dest)
//it merges the common properties of destination in source

let u1={
    name:"Rohan",
    email:"rohan@gmail.com"
}


let u2={
    email:"rohansharma@gmail.com",
    age:30
}

console.log(`u1=`,u1)
console.log(`u2=`,u2)

let res=Object.assign(u1,u2)
console.log(`res=`,res)