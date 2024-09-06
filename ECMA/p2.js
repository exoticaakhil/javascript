//object declaration to const
const user={
    name: "john"
}
console.log(`before user=`,user)
//re assign as an object not possible
//user={
//name:"sam"
//}
//re assign to the property is possible in object
user.name="sam"
console.log(`after user=`,user)