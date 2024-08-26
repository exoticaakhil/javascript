//Accessor properties (get/set)
let user = {
    name : "sai",
    surName:"Mathew"
}
Object.defineProperty(user,"fullName",{
    get:function(){
        return this.name + " " + this.surName
    },
    set:function(val){
        [this.name,this.surName]=val.split("")
    }
})
console.log(`fullname=`,user.fullName)
user.surName="kajal"
console.log(`fullname=`,user.fullName)
user.surName="sunny"