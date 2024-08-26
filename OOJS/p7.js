// write protect in defineProperty and defineProperties

let user={}
Object.defineProperty(user,"name",{
    value:"Mike",
    writable:true
})

console.log(`before=`, user)
user.name="Tom"
console.log(`after=`, user)

//false
let user1={}
Object.defineProperty(user1,"name",{
    value:"Mike",
    writable:false
})

console.log(`before=`, user1)
user1.name="Tom"
console.log(`after=`, user1)