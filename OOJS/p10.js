let user ={
    name:"john",
    email:"john@gmail.com",
    age:22
}
Object.defineProperty(user,"city",{
    value:"bengaluru",
    writable: false
})
console.log(`befor user =`,user);
 
Object.freeze(user)

user.name="Sam"
user.email="sam2gmail.com"
user.age=24
user.city="Manglore"
console.log(`after user =`,user);