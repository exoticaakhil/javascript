// class Expression

let User = class {
    constructor(){
        this.x = 12
    }
    // method
    print(){
        console.log(`X =`,this.x)
    }
}
//instance
let ins= new User()
console.log(`instance =`, ins)
ins.print()

/* 
class User{
    constructor(){
        this.x = 12
    }
}
*/