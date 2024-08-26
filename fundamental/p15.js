function product(x,y){
    return x*y;
}
var res1= product(12,13);
document.write(`<h1>product=${res1}</h1>`)
function rem(){
    let a = 244;
    let b = 32;
    return a % b;
}
let res2= rem()
    document.write(`<h1>reminder =${res2}</h1>`)
function diff(p,q) {
    document.write(`<h1>diff=${ p-q}</h1>`)
}
diff(45,23)
function userInfo(){
    let name="john"
    document.write(`<h1>enterd name is ${name}</h1>`)
}
userInfo()