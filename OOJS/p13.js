//Object.keys() and Object.values()
let user={
    name:"tom",
    email:"tom@gmail.com",
    mobile:"9526000539",
    age:23,
    city:"Manglore"
}

console.log(`user=`,user)

let res1=Object.keys(user)//array of keys
let res2=Object.values(user)//array of values
console.log(`keys=`,res1)
console.log(`values=`,res2)
for(let item in user){
    document.write(`<h1> ${item}:${user[item]}</h1>`)
}