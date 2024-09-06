//function in loops
var funs=[]
for(var i=0;i<10;i++){
    funs.push(function(){
        console.log(`output=`,i)
    })
    

}
console.log(`funs=`,funs)
funs.forEach((item)=>{
    item() //call->outputs the number "10" ten times    
})
console.log(`\n`)
var funs1=[]
for(var i=0; i<10;i++){
    funs1.push((function(val)
    {
        return function(){
            console.log(`val=`,val)
        }
    }(i)))
}
console.log(`funs1=`,funs1)
funs1.forEach(function(item){
    item()//output

})