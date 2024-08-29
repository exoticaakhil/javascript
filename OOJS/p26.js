/*
wallet class
   balance property
   methods
      debit(val)  -> withdraw from vallet balance
      credit(val)  ->desposit money to the balance
*/
class wallet{
    constructor (balance){
        this.balance = balance;
    }
    debit(val) {
        if (val <= this.balance) {
            this.balance -= val;
            console.log(`Debited ${val}. New balance is ${this.balance}.`);
        } else {
            console.log(`Insufficient balance! Cannot debit ${val}. Current balance is ${this.balance}.`);
        }
    }

    credit(val) {
        this.balance += val;
        console.log(`Credited ${val}. New balance is ${this.balance}.`);
    }
}

// Example usage
let myWallet = new wallet(100); 
myWallet.credit(50);  
myWallet.debit(30);   
myWallet.debit(200);  
