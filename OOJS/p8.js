"use strict"

//Object.defineProperties()
//can add method also
// object.defineProperties()
let user = {}

Object.defineProperties(user, {
    name: {
        value: "Mike",
        writable:true
    },
    city: {
        value: "New York",
        writable:false
    },
    getName: {
        value: function() {
            return `<h1>name is ${this.name}</h1>`
        }
    },
    getEmail: {
        value: () => {
            document.write(`<h1>email id is = ${this.email}</h1>`)
        },
        writable:false
    }
})

console.log(`user =`,user)
user.name="sam"
user.email="sam.gmail.com"
user.city="Thrissur"
console.log(`after=`,user)

//to avoid runtime errors(exceptions)

try{
    user.name="sam"
    user.email="sam@gmail.com"
    user.city="Bengaluru"

}
catch(error){
    console.log(Error)

}

console.log(`after-`,user)
