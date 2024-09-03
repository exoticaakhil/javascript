/* 
Accessor methods defined using set and get keywords
accessor method called as property
 _age is alias property
 userAge is main property
 set userAge and set userAge is accesors

*/

class Person{
    constructor(){
        this._name=" ";
        this._age=0;

    }
    set name(val){
        this._name=val
    }
    get name(){
        return this._name
    }
    //assign the value to the alias property
    set userAge(val){
        this._age=val;
    }
    //read the value from alias property
    get userAge(){
        return this._age;
    }
}
let x=new Person()
x.name="Tom"
x.userAge=22;
// x.age(22)
console.log(`name is =`,x.name);

console.log('age is=',x.userAge);