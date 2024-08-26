//_ proto _
let u1={
    name:"sam",
    email:"sam@gmail.com"
}
let u2={
    age:22,
    mobile:"9526000539",
    _proto_:u1
}
let u3={
    city:"banglore",
    state:"kerala",
    _proto_:u2
}

console.log(`u3=`,u3)