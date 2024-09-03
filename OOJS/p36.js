/*task-1
   wallet
      _balance
    
      transactions =>credit(val)   set balance
                     debit(val)    get balance

*/

class Wallet {
    constructor() {
        this._balance = 0;
        this.type=" ";}
        set balance(val){
            if(this.type==="debit"){
                if(val >this._balance)
                    {
                    console.log("insufficient balance")
                }
                else{
                    this._balance -= val
                }
            }
            else if(this.type === "credit"){
                this._balance += val
            }
            else{
                console.log("Invalid transaction type")
            }
           
        }
        //retrive the balance
        get balance(){
            return this._balance
            }   
    }
 let x=new Wallet()
 x.type="credit"
 x.balance=1000
 console.log('type =',x.type)
 console.log('balance =',x.balance)



 x.type="credit"
 x.balance=2000
 console.log('type =',x.type)
 console.log('balance =',x.balance)

 x.type="debit"
 x.balance=1000
 console.log('type =',x.type)
 console.log('balance =',x.balance)