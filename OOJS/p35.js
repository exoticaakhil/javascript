class Wallet {
    constructor(val = 0) {
        this._balance = val;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.error("Balance cannot be negative");
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        } else {
            console.error("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        } else {
            console.error("Insufficient funds or invalid amount");
        }
    }
}

// Example usage:
const bal = new Wallet(100);
console.log(bal.balance); 

bal.deposit(50);
console.log(bal.balance); 

bal.withdraw(30);
console.log(bal.balance); 

bal.balance = 200;
console.log(bal.balance); 

bal.balance = -50; 
console.log(bal.balance); 
