// class is a group of objects (state and behaviours)
class User{
    // constructor method -> Represent the class
    constructor(){
// properties | States
        this.name = "john";
        this.age = 30
        this.isUser = false;
        this. hobbies =["riding","driving","cycling"]
        this.account ={
            type : "Savings",
            bank : "SBI",
            num : 23343
        }

    }
    getUserName(){
        document.write(
            `<h1>username = ${this.name}</h1>`
        )
    }
}
let u = new User()
document.write(`<h1> name is = ${u.name}</h1>`) 
document.write(`<h1>bank name is = ${u.account.bank}</h1>`) 

u.getUserName()