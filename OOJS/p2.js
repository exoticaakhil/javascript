//obj methods
let user={
    name:"john",
    email:"john@gmail.com",
    age:22
,
isUser:true}

//Object constructor
console.log(`user=`,user)
//Object.create(obj)-> it will copy / clone the object prototype
let newObj=Object.create(user)
console.log(`newobj=`,newObj)