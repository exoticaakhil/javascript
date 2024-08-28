// prototype inheritance
//internal properties will not get inherited
function User(em){
    this.name ="john";
    this.email= em;
    this.getUserInfo = function(){
        document.write(<h1> name = ${this.name} and email = ${this.email}</h1>)
    }
}
//only the external properties can be inherited
User.prototype.age=24
User.prototype.getInfo = function(){
    document.write(`<h3> name= ${this.name} and age= ${this.age}</h3>`)
}
function Base(){

}

//inherit by _proto_
Base.prototype._proto_ = User.prototype

let x = new Base()

console.log(`x =`,x)

console.log(`name = `,x.name)
console.log(`email=`,x.email)
// only age will be printed as it is a external property
console.log(`age=`,x.age)

x.getInfo()