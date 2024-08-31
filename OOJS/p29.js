// super class

class Account {
    constructor(ac,bl) {
        this.account = ac;
        this.balance = bl;
    }
    getAccountInfo() {
        return `Account id : ${this.account} and  Balance is : &#8377; ${this.balance}.`;
    }
}
// base class
class User extends Account {
    constructor(na,acc,bal) {
        super(acc,bal)
        this.name = na;
    }
    getCompleteInfo() {
        return `Hi , ${this.name} your account details is ${this.getAccountInfo()}`;
    }
}
let u1 = new User("tom",123445,24000);
document.write(<h1> ${u1.getCompleteInfo()} </h1>)