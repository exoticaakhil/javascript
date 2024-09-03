/* setAge and getAge is method */
class User{
    constructor(){
        this.name=" ";
        this.age=0;//property
    }
    //method
    setVal(a,b){
        this.name=a;
        this.age=b;
    }
    getVal(){
        return this.name+" "+this.age;
    }
}
let y=new User()
console.log(`method=`,y)
y.setVal("Akhil",22)
// x.age(22)

console.log('age is=',y.getVal());