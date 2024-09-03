//methods dynamic methods
//computed method /computed member
// direct assignment
//dynamic property
let mName="getPersonInfo"
class Person{
    constructor(val){
        this.name=val;
    }
    /*
     [dynamic ](){
     }
    */
   [mName](){
    document.write(<h1> user name= ${this.name} </h1>)
   }
}
let x =new Person("harry")
//x.getPersonInfo   
x[mName]()