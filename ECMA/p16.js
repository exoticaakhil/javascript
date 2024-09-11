/* promise is abulit in constructor
 promise Constructor 
 1.Resolve -onfulfilled() - .then()
 2.reject -onrejected() - .catch()
 3.Pending
 4.Settled
*/
function product(a,b){
    return new Promise(function(Resolve,reject){
        if(typeof a !== "number" || typeof b !=="number"){
            return reject(new TypeError("Inputs must be numbers"))
        }
        Resolve(a * b)
    })
 }
 let out= product(10,12)

 out.then(res=> {
    console.log(`resolve=`,res);
 }).catch(err => console.log(`rejected=`,err))