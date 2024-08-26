/* obj->grp of props
prototype
let obj={key:value,
key:value}*/

let user={
    name:"john",
    age:22,
    isUser:true,
    hobbies:["riding","driving","cycling"],
    bank:{
        name:"SBI"
    },
    getUser: function(){
        return `My name is ${this.name}`
    }

}
console.log(`username=`,user.name)
console.log(`Age=`,user["age"])
console.log(`isUser=`,user["isUser"])

user.hobbies.forEach((item,index)=>
document.write(`<h1>${index} ${item}</h1>`));


document.write(`<h1>Bank name= ${user.bank.name}</h1>`)
document.write(`<h1>Method= ${user.getUser()}</h1>`)